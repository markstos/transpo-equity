#!/usr/bin/env fish
# Counts the number of locations funded per district.
# Ignores the fact that some large project locations took multiple years of funding to complete.
for f in 1 2 3 4 5 6; echo -n "$f,"; ack -cl "\"councilDistrict\": \"$f\"" ../geojson/sidewalk-funding/*.geojson | wc -l; end;
