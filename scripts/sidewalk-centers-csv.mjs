// Produce a CSV of sidewalk center coords
// For use in projects like The Spatial Equity Data tool.
// https://apps.urban.org/features/equity-data-tool/#user
// Run as: node ./sidewalk-centers-csv.mjs >../data/sidewalk-centers.csv
import fs from 'fs'

// Read the file
const sidewalksFile = fs.readFileSync(`../geojson/2004-2020-funded-sidewalks.geojson`)

// Parse the JSON to a JavaScript object
const sidewalksJSON = JSON.parse(sidewalksFile)

// We just care about the features array
const features = sidewalksJSON.features;

// We just care about the center point features
const centerFeatures = features.filter(f => f.properties.description === "Project Center")

// Write the sidewalk  project center point coords to STDOUT in CSV format.
console.log('longitude,latitude')
centerFeatures.forEach(f => {
  console.log(`${f.geometry.coordinates[0]},${f.geometry.coordinates[1]}`)
})


