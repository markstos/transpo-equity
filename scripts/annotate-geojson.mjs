/*

( Requires Node.js > 14 to run to support top-level "await" ).

Annotate Sidewalk GeoJSON files with data from sidewalk funding speadsheet.

Designed to be Idempotent-- GeoJSON properties will always be erased and replaced
with data from the spreadsheet.

Data model for properties is:

{
  id: 'MAXWELL-1',
  description: 'Maxwell Street from Foo Street to Zoo Street (East Side)',


  acquistionYear: '2014', // Date's are String
  acquistionCost: 65123, // Let's drop the cents

  designYear: '2015',
  designCost: 65123,

 // If construction spans more than one year, total cost will sum all values
 // but 'constructionCost' will include only the most recent construction year.
 // This could be fixed to include all construction years.
  constructionCost: 65123,
  constructionYear: '2016',

  totalCost: 250123, // If location is funded in multiple years, the total cost.

  councilDistrict: 6,
}

This will crash unles you define WS_API_KEY in the environment to valid Walk Score API key.

*/


import Promise from 'bluebird'
import parse from 'csv-parse/lib/sync.js'
import fs from 'fs'
import boolWithin from '@turf/boolean-within'
import turfCenter from '@turf/center'
import fetch from 'node-fetch'


// I think I'm missing a better way to import and rename `within`.
const within = boolWithin.default;
const center = turfCenter.default;

let fundingFile;
try {
  fundingFile = fs.readFileSync(`../data/sidewalk-funding.csv`)
}
catch (err) {
  console.error("Reading sidewalk-funding.csv failed. Perhaps it needs to exported from related ODS file?")
  console.error("Error was: ", err)
}


// Keys are "Funding Year", "Description", "Amount", "Location Id" and "Source"
const fundingRows = parse(fundingFile, { columns: true, trim: true })

// Keep track of locations that see more than once.
var locTotalCost = {};

// Create an object which maps district Ids to their GeoJSON boundries
const districtToGeoJSON = extractCouncilDistricts(`../geojson/city-council-districts-2020.geojson`)

//fundingRows.forEach(annotateOneRow);
Promise.mapSeries(fundingRows, annotateOneRow)

// ******************************************************************************* //

// Receive one CSV row from sidewalk-funding.csv,
// Update related GeoJSON file
async function annotateOneRow (row) {
  const locFilePath = `../geojson/sidewalk-funding/${row["Location Id"]}.geojson`
  const locFileContents = fs.readFileSync(locFilePath)
  const loc = JSON.parse(locFileContents)

  console.log(`About to Update ${row["Funding\nYear"]} ${row["Location Id"]}.`)

  // Make sure the cost is treated as a number, not a string
  row["Amount"] = Number(row["Amount"])

  // Each file contains a GeoJSON FeatureCollection with one or more features.
  // If there's more than one Feature, we update the the properties for all.
  loc.features = await Promise.mapSeries(loc.features, annotateOneFeature.bind(row));

  // If walkscore hasn't already been calculated,
  // add calculated center point with "walkScore" property to each project location.
  const hasWalkScore = (feat) => feat.properties.walkScore;

  if (!loc.features.some(hasWalkScore)) {
    const centerGJ = center(loc)
    centerGJ.properties.description = "Project Center"
    centerGJ.properties.walkScore = await addWalkScore(centerGJ.geometry.coordinates)
    loc.features.push(centerGJ);
  }

  const updatedLocFileContent = JSON.stringify(loc, null, '  ')
  fs.writeFileSync(locFilePath, updatedLocFileContent)
}

// Given a single GeoJSON Feature,
// Annotate with it with properties from the CSV row
// `this` is bound to the CSV row for convenience.
// Modifies-by-reference.


async function annotateOneFeature (feature) {

  feature.properties.id = this["Location Id"]
  feature.properties.description = this["Description"]

  // Initialize the total cost if it's not defined.
  locTotalCost[feature.properties.id] = locTotalCost[feature.properties.id] || 0

  // Add this year's cost to the total cost, if any.
  locTotalCost[feature.properties.id] += this["Amount"]
  feature.properties.totalCost = locTotalCost[feature.properties.id]

  // If there's no mention of acquistion or design, we assume construction costs.
  if (this["Description"].match(/acquisition/i)) {
    feature.properties.acquisitionYear = this["Funding\nYear"]
    feature.properties.acquisitionCost = this["Amount"]
  }
  else if (this["Description"].match(/design/i)) {
    feature.properties.designYear = this["Funding\nYear"]
    feature.properties.designCost = this["Amount"]
  }
  else {
    feature.properties.constructionYear = this["Funding\nYear"]
    feature.properties.constructionCost = this["Amount"]
  }

  feature.properties.councilDistrict = addDistrict(feature)
  return feature;
}

// Given a path to the City Council GeoJSON file,
// return object that maps district IDs to their GeoJSON boundry
function extractCouncilDistricts (jsonPath) {
  const districtFileContents = fs.readFileSync(jsonPath)
  const councilFeatureCollection = JSON.parse(districtFileContents)

  // keys are district numbers, values are GeoJSONn boundaries
  let idToBoundaryMap = {}

  councilFeatureCollection.features.forEach(feature => {
    const districtId = feature.properties['DISTRICT']
    if (districtId) {
      // District 1 is represented by three MultiPolygons. The first wo are are for tiny
      // islands where no sidewalks were built, so we only consider the third
      // which has an ID of "CityCouncilDistricts.8"
      if (districtId === 1) {
        if (feature.id === "CityCouncilDistricts.8") {
          console.log(`Found boundary for City Council district 1.`)
          idToBoundaryMap[districtId] = feature;
        }
        else {
          console.log(`Dicarding tiny island from District 1 where no sidewalks were built.`)
        }
      }
      else {
        console.log(`Found boundary for City Council district ${districtId}.`)
        idToBoundaryMap[districtId] = feature;
      }
    }
  })

  return idToBoundaryMap;
}

// Given a GeoJSON feature representing a sidewalk returning,
// returning the number of the City Council of the district that contains it,
// or undefined if none was found (perhaps it crosses a boundary)
function addDistrict (feature) {
  let foundId;
  for (const districtId of Object.keys(districtToGeoJSON)) {
    //console.log(`Checking if ${feature.geometry.type} is within ${districtToGeoJSON[districtId].geometry.type}`)

    if (within(feature, districtToGeoJSON[districtId])) {
      console.log(`\tAdding Council District ${districtId}`)
      foundId = districtId;
      break;
    }
  }

  if (!foundId) {
    console.log("\tWARNING: Found No matching District")
  }
  return foundId;
}

async function addWalkScore (coordinates) {
  const [lon, lat] = coordinates;

  // Only the coordinates are used to calculate the walk score, but I'm required to
  // to provide a dummy address anyway
  const url = `https://api.walkscore.com/score?format=json&address="1 College Ave, Bloomington, IN"`
               +`&wsapikey=${process.env.WS_API_KEY}&lat=${lat}&lon=${lon}`

  const json = await (await fetch(url)).json()

  // be gentle
  await Promise.delay(1000)
  return json.walkscore;

}

