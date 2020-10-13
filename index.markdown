---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

TODO: Incorporate ADA metrics.

## Introduction

As a Bloomington citizen and President of our Bicycle and Pedestrian Safety Commission, I've conducted an independent audit of the equity of Bloomington, Indiana's sidewalk funding with regard to race and income.  

To keep the scope manageable the audit focuses on new sidewalks funded by the City Council's Sidewalk Committee. There are other kinds of equity that benefit review as well, such as the City's progress on improving sidewalks for those with physical disabilities. A report on the number of new and replaced ADA compliant sidewalks ramps is also included.

Other sidewalks were also built and repaired during this time using other funding mechanisms which are outside of the scope of this audit.

To start with let's look at why equitable funding for sidewalk with regard to race and income matters.

Data shows increased risk of pedestrian danger and death for people of color and those
who live in lower income census tracts.

![Walkers who identify as American Indian, Alaskan Native, Hispanic, Latino, Black, or African American are far more likely to be killed by traffic violence than their white and Asian-identifying counterparts. ](./img/intro-people-of-color-in-fatal-crashes.png)

![Walkers who travel in the poorest census tracks have the greatest likelihood of being killed by drivers.](./img/ped-deaths-by-median-income.png)
source:  [Smart Growth America](https://smartgrowthamerica.org/dangerous-by-design/)

As Bloomington raises to the Mayor's challenge to "rebuild with equity",
transportation and sidewalks are certainly worth some consideration as part of that process.

Before we look at how Bloomington performed in the audit, let's look at what sidewalk
equity best practices look like.

### Sidewalk Equity Best Practices

Best practices can be divided into _Process_ and _Metrics_

#### Process

The Eno Center for Transportation [highlights](https://www.enotrans.org/article/sidewalk-stakeholder-engagement-and-underlying-equity-concerns/) that _public may consider allocations of funding for sidewalk repairs inequitable when undertaken in certain areas and not in others, or on a first-come, first-serve basis for people who file formal requests._  A more equitable approach than a request-best process would to have a create a
[full sidewalk inventory](https://chicago.curbed.com/2019/9/10/20851132/chicago-walkability-sidewalk-data-cmap-research) that can be mapped and connected to other data sets like race and income data for census
tracts.

#### Metrics

Once a City has a comprehensive inventory of their existing and missing sidewalks, objective metrics can be used to prioritize where new sidewalks are most needed. Appropriate metrics could include the following:

 * Race and Income data by census tract or the more granular census "blocks".
 * [Walk Score](https://www.walkscore.com/), which measures "walk potential". Locations
   with more businesses, restaurants and other locations of interest within about a mile
   rank higher.
 * Pedestrian Level of Service (PLOS). This measures the current level of risk and comfort for
   walking in a particular area. Higher risk / lower comfort areas can be prioritized
 * Density. Sidewalks are prioritized where there are more people nearby likely to use them.
 * Transit Access. [Prioritizing sidewalk investment near transit supports a more accessible transportation system - CMAP](https://www.cmap.illinois.gov/updates/all/-/asset_publisher/UIMfSLnFfMB6/content/prioritizing-sidewalk-investment-near-transit-supports-a-more-accessible-transportation-system)

The Victoria Transport Policy Institute [finds that](https://vtpi.org/equity.pdf) _There is no standard way to determine how much weight to give a particular equity objective; such planning decisions should reflect community needs and values. Some communities may place a higher or lower value on a particular equity objective._

Accordingly, some amount of tuning in how the variables factor in to a final score is reasonable
and periodic review of the effectiveness of a local formula is prudent.

#### Transportation Equity Metrics Examples

Here you can see some examples of how some other cities have use race and income census data to create an "Equity Matrix Map" that generates a value for each census tract can be used as a metric along with the other objectives metrics above.

Click through either of these screenshots for an interactive map.

[![San Antonio Equity Matrix Map](./img/equity-matrix-map-san-antonio.png)](https://cosagis.maps.arcgis.com/apps/MapSeries/index.html?appid=184271d3b89748e5b6ba183463da804a)
[![Portland, Oregon Equity Matrix Map](./img/equity-matrix-map-portland.png)](https://pdx.maps.arcgis.com/apps/MapSeries/index.html?appid=2e2252af23ed4be3a666f780cbaddfc5)

## Bloomington Sidewalk Equity Scorecard for New Project Funding

First, let's score the process:

### Process Scorecard

| Score | Best Practice |
| ------| ------------- |
| ❌  | Uses comprehensive sidewalk inventory for planning |
| ✅  | Uses objective metrics to prioritize sidewalk locations |
| ❌  | ...and includes race and income metrics |
| ❌  | ...and uses formulas that function as intended |
| ❌  | Free of side-channels that bypass objective metrics |

Let's look the data and research that supports each finding.

### Request-Based Input

From review of an internal planning spreadsheet and email with city staff, I found
that Bloomington has "no defined process" for how projects end up in the spreadsheet
that applies objective metrics to them.

A request-based input system is biased towards those who know the system exists, believe the system
works for them or have had success with the system in the past. The city staff may add projects
they recommend to the list as well. Neighborhoods that lack advocates and are not as well
known to the city staff would not fare as well in the current system.

The Sidewalk Committee is composed of four self-selecting members of City Council and makes
final decisions. While this committee's meetings are public, public input is not allowed.
Dave Rollo representing District 4 in the southeast part of Bloomington has
served continuously on the committee for 17 years. This group can add and select projects
for funding _after_ other projects have been considered have been considered with objective
metrics. Below we'll look more at the results this process has produced.

### Objective Metrics

Since 2015, the City staff has been using a number of objective metrics to rank sidewalk projects
including:

 * Walk Score
 * Transit Score
 * Pedestrian Level of Service
 * Density
 * Estimated Cost

This is heading in the right direction, but some significant problems were found:

 1. The Sidewalk Committee can completely ignore the objectives and fund projects
    regardless objective rank and even projects not on the list. And they do.
 2. An error in one of the Excel formulas caused projects to have their "Pedestrian Level of Service"
    scores sorted in the opposite direction intended. Correcting this changed the overall rank
    of every project, sometimes in very significant ways. This affected all rankings since
    it was introduced in 2015.
 3. Race and Income data is not factored into the locations considered.

### Impact Audit

Above we compared Bloomington's sidewalk funding practices against best practices. Here
we look at where new sidewalks to see how equitable they were in practice.

TODO: STOPPED HERE.

Step through the maps.

* Show Spatial Equity tool audit report
* Show bias towards wealthier, whiter district 4 4.

 * District Attendance vs District Project Count
 * Example of Walk Score of earliest projects vs most recent walk score.

## Other Findings

 * DONE: ADA Ramps
 * DONE: Ding them for not following GeoJSON standard
     Not only does the modern GeoJSON standard call for WSG 84, but ArcGIS requires
     GeoJSON to be WSG 84 as well.
 * DONE: Recover Forward equity selection?
 * DONE: Visual tools are helpful.
 * DONE: Private Neighborhoods

 * TODO: Street Grid Policy (embed video)
 * TODO: Link to Obesity and COVID-19
     https://www.cdc.gov/obesity/data/obesity-and-covid-19.html

  TODO: Final Conclusions and Recommendations

## Sidewalk Maps

I've also created an interactive map so other citizens can visually
review some of the data sets I've been working and draw their own conclusions.

 * Funded Sidewalk Committee projects for past 17 years
 * Missing Sidewalks
 * Missing Sidewalks with Walk Score Heatmap

### Recommendations

 * Use Comprehensive Sidewalk Inventory / LIDAR scans for input
 * Incorporate use of "Equity Matrix" metric in priority system
 * Increase use GIS tools for planning and transparency, like "Walk Score Heatmap",
   "Equity Matrix Map" and "Missing Sidewalk Map".
 * Software?

## Feasibility of Implementing Best Practices

## Recommendations for Council Sidewalk Committee

 * Sidewalk Committee role shifts to annual review of metrics uses. Staff
   selects sidewalks for funding based on comprehensive inventory and
   public and objective priority matrix.

## Thanks

  * Deborah Myerson
