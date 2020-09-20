#!/usr/bin/env fish
# hack way to get the Walk Scores from GeoJSON to CSV
grep walkScore ../geojson/sidewalk-funding/*.geojson | sed 's/..\/geojson\/sidewalk-funding\///; s/\.geojson.*core": /,/;'>../data/sidewalk-committee-walkscores.csv
