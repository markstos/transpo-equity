
import { readFileSync, writeFileSync } from 'fs'

let inFile = readFileSync('../data/sidewalk-requests.json')
import turf from '@turf/helpers'


//  signature is point([lon, lat], {properties});

// structure is an array of objects.
// keys include: latitude, longitude, enteredDate, description
writeFileSync(
  '../geojson/2020-sidewalk-requests.geojson',
  JSON.stringify(
    turf.featureCollection(
      JSON.parse(inFile)
        .filter(row => (row.latitude && row.longitude != null))
        .map(row => {
          return turf.point(
            [row.longitude, row.latitude],
            {
              requestDate: row.enteredDate,
              description: row.description
            }
          )
        })
    )
  , null, '  ')
)
