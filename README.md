# Mapping Transportation Equity in Bloomington Indiana

Exploring Maps related to Transportaton Equity in Bloomington, Indiana

## About

The goal of this project is to pull together various data sources relateds to transportation
equity in Bloomington Indiana. Each data source will be represented on a map layer here
that can be toggled on and off.

The maps can then help inform analysis and decisions at the intersection of transportation
and equity in Bloomington, Indiana

## Located Data Sources

The following public data sources have been located in GeoJSON format.

 * [City Council District Boundaries](https://data.bloomington.in.gov/dataset/city-council-district-maps) ([GeoJSON](http://bloomington.in.gov/geoserver/publicgis/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=publicgis:CityCouncilDistricts&outputFormat=application/json))
 * [Bicycle And Pedestrian On Road Bike Facilities](https://data.bloomington.in.gov/dataset/bicycle-and-pedestrian-on-road-bike-facilities-gis-data) ([GeoJSON](https://bloomington.in.gov/geoserver/publicgis/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=publicgis:BikeLanesRoutes&outputFormat=application%2Fjson))
 * [Bicycle and Pedestrian Trails and Paths](https://data.bloomington.in.gov/dataset/bicycle-and-pedestrian-facilities-trails-and-paths-gis-data) ([GeoJSON](https://bloomington.in.gov/geoserver/publicgis/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=publicgis:TrailsAndPaths&outputFormat=application/json))
 * [Bloomington Municipal Boundary](https://data.bloomington.in.gov/dataset/bloomington-municipal-boundary-gis-data) ([GeoJSON](https://bloomington.in.gov/geoserver/publicgis/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=publicgis:BloomingtonMunicipalBoundary&outputFormat=application%2Fjson))
 * [Census tract boundaries](./geojson/bloomington-2010-census-tracts.geojson)
 * [Bloomington, IN Neighborhood boundries](https://bloomington.in.gov/geoserver/publicgis/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=publicgis:CityNeighborhoodAssociations&outputFormat=application%2Fjson)
 * [Bloomington, IN current Sidewalks](https://bloomington.in.gov/geoserver/publicgis/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=publicgis:SidewalkInventory&outputFormat=application%2Fjson)

 * [Bloomington, In City Maintained Streets](https://data.bloomington.in.gov/dataset/city-maintained-streets-gis-data) (GeoJSON[](https://bloomington.in.gov/geoserver/publicgis/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=publicgis:CityMaintainedStreets&outputFormat=application/json&srsName=EPSG:4326))
 * Council Sidewalk Reports from 2004 - 2020

## Interactive Map

Explore an [interactive map](https://markstos.github.com/transpo-equity/mapbox.html) of some of the data layers available so far.


## Desired Data Sources

We're interested in public sources of the following data, ideally available in GeoJSON format.

 * [Racial/density map by census district](http://racialdotmap.demographics.coopercenter.org/)
   * [Racial demographic dot-density map](https://observablehq.com/@aboutaaron/racial-demographic-dot-density-map) describes to build a racial dot map for specific city. Their
     solution produces a more flexible result, allowing you select just which combinations of race categories you want to display.
 * [Income Map](http://www.city-data.com/income/income-Bloomington-Indiana.html)
 * [Motor Vehicle / Ped Crash Density Map](https://bloomington.in.gov/sites/default/files/2019-07/05.22.2019%20Transportation%20Plan%20Council%20Approved%20edits_0.pdf#page=20&zoom=280,-207,624). Currently on page 20 of the Transportation Plan.
 * [Motor Vehicle / Bike Crash Density Map](https://bloomington.in.gov/sites/default/files/2019-07/05.22.2019%20Transportation%20Plan%20Council%20Approved%20edits_0.pdf#page=21&zoom=280,-207,624). Currently on page
 21 of the Transportation Plan
 * [Planned Bicycle Facilities Network](https://bloomington.in.gov/sites/default/files/2019-07/05.22.2019%20Transportation%20Plan%20Council%20Approved%20edits_0.pdf#page=47&zoom=280,-207,792). Currently in the Transportation Plan. Page 47.
 * [Priority Bicycle Facilities Network](https://bloomington.in.gov/sites/default/files/2019-07/05.22.2019%20Transportation%20Plan%20Council%20Approved%20edits_0.pdf#page=48&zoom=280,-207,737). Page 48. These are the bike projects most likely to be funded and built in the next 6 years.
 * Locations and other details of sidewalk projects funded by the Sidewalk Committee
 * Locations and other details of sidewalk projects recommended by the Transportation and Planning
   department, whether they were funded or not.
 * [Walk Score](https://www.walkscore.com/) (not public but a free tier of use is available)

The Council Sidewalk reports from 2017 and 2018 reports were requested from the Bloomington City Clerk on August 29th, 2020.
Vector City GIS maps above were required from the Bloomingotn GIS Department on August 29th, 2020.

## Notes on City of Bloomington, Indiana GeoJSON Format

As of September 7th, 2020, the City of Bloomington, Indiana was publishing their GeoJSON
using the EPSG:2966 coordinate reference system. The current GeoJSON specfication only allows
for WSG84 as the coordinate reference system, AKA EPSG:4326. I've recommended to Bloomington that they
update their GeoJSON for better interopability. In the meantime, when using Bloomington's Open Data Portal
GeoJSON feeds, you can adjust or add the  `srsName` parameter in the URL to retrieve GeoJSON using
the expected WSG84 coordinates: `srsName=EPSG:4326`

## Tools

 * [MyGeodata Converter](https://mygeodata.cloud/sitemap/conversionslist?style=converter&type=1) converts many other vector formats to GeoJSON.

## Milestones

See the Issue Tracker to track sub-tasks and milestones for this project.

The first big goal for the project is a "sidewalk equity audit".  We'll
look at sidewalks recently approved for funding by the Sidewalk Committee as
well as those recommended by the Transportation and Planning Department that might
not have been approved.

The sidewalk project data will be looked at in the context of the other related data sources above.


## Related 

 * [Bloomington Sidewalk Committee](https://www.bloomington.in.gov/council/sidewalks) is a
   four-member subset of the City Council that decides on how sidewalk funds
   are spent. They are advised by the Planning and Transportation Department,
   which
   analyzes the projects with several objective metrics, but the group is not required to follow
   the objective metrics and may fund projects not on the list at all. For example, after
   recently funding a crosswalk for a cul-de-neighborhood on Moore's Pike, the most
   recent meeting funded another cross walk across Moore's Pike, supporting another
   10 household cul-de-sac, despite there being neighborhoods with many more homes elsewhere in
   the City that have sub-par sidewalk facilities.
 * [Program Criteria for Sidewalk Projects](https://bloomington.in.gov/sites/default/files/2020-02/Sidewalk%20Report%20-%20FINAL%20-%20with%20signatures.pdf#page=6&zoom=200,-51,108). Page 6. These are objective criteria for sidwalks. The table there could be extracted and added to this page.

## Transportation Equity References

 * [Tamika Butler's CommuteCon Keynote on Transportation Equity](https://commutecon.com/commutecon-2020/transportation-equity-tamika-butler)
 * [Five Things the Bike Movement Can Do Now to Move Toward Racial Equity](https://www.centerforsocialinclusion.org/five-things-the-bike-movement-can-do-now-to-move-toward-racial-equity/)
 * [Moving to Equity: Addressing Inequitable Effects of Transportation Policies on Minorities](https://www.racialequitytools.org/resourcefiles/sanchez-moving-to-equity-transportation-policies.pdf)
 * [Black Lives and Policing: The Larger Context of Ghettoization](https://www.racialequitytools.org/resourcefiles/sanchez-moving-to-equity-transportation-policies.pdf)

### Example of City Equity Maps

### Goverment agencies with Transportation Equity Programs

 * [San Antonio Equity Matrix + Demographic Indicator Map](https://cosagis.maps.arcgis.com/apps/MapSeries/index.html?appid=184271d3b89748e5b6ba183463da804a) provides an excellent reference because it includes the calculations it uses to classify census tracts by race and income before combing the two values for a final metric.
 * [Portland, Oregon Equity Matrix Map](https://pdx.maps.arcgis.com/apps/MapSeries/index.html?appid=2e2252af23ed4be3a666f780cbaddfc5) According to the Portland Bureau of Transportation, national best practices say to use three variables in an equity matrix: Race, Income and Limited English Proficiency (LEP). Portland found they only had solid data for Race and Income, so they focused on those matrixes. The map linked here shows how different areas of Portland score on a combined Race + Income equity scale.

  * [San Francisco Transportation Equity Audit](https://archive.sfcta.org/sites/default/files/content/Planning/SFTP2/FinalReport/Appendix%20F%20Transportation%20Equity%20Analysis.pdf) San Fransciso ran their own geospatial transportation equity audit. The report found: _for safety metrics in particular, the city’s communities of concern tend to experience disproportionately worse conditions_ Accordingly, going forward San Francisco found that _equity may be one of several criteria used to determine which projects and programs should be included in the SFTP’s financially constrained and vision investment scenarios._
 * [Boston Region MPO Transportation Equity Program](https://www.ctps.org/equity) _the MPO identifies and maps communities in the region that exceed certain thresholds for the populations that are covered by federal laws and EOs, as well as other populations that it considers traditionally underserved by the transportation system_
* [Book: Measuring Transport Equity](https://www.sciencedirect.com/book/9780128148181/measuring-transport-equity)







