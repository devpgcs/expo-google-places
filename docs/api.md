---
layout: page
title: API reference
---

In this section you will find the API reference for this library and an explanation of the different components that you can use.

<br>

## Methods

#### fetchPredictionsWithSession(inputText, filter)

| **Description** |
| Fetches place predictions asynchronously using the session-based approach and returns a list of predictions, with up to five autocomplete predictions. |
| **Returns** |
| `Promise<AutocompletePrediction[]>`<br><br>_References_: [AutocompletePrediction](#autocompleteprediction) |

**Parameters**

| **Name** | **Type** | **Description** |
| **inputText** | `string` | The address (completed or not) typed by the user. |
| **filter** | `AutocompleteFilter | undefined` | The filter to apply which helps to constrain the results to a specific area or type of place.<br><br>_References_: [AutocompleteFilter](#autocompletefilter). |

## Interfaces

#### AutocompleteFilter

| **Description** |
| Represents a filter to apply to an autocomplete request. This allows customization of autocomplete suggestions to only those places that are of interest. |

**Properties**

| **countries** | `string[] | undefined` | The countries to restrict results to. |
| **locationBias** | `LocationBounds | undefined` | The optional location bias to prefer place results near the location.<br><br>_References_: [LocationBounds](#locationbounds) |
| **locationRestriction** | `LocationBounds | undefined` | The optional location restriction to limit the place results to.<br><br>_References_: [LocationBounds](#locationbounds) |
| **origin** | `LatLng | undefined` | The straight line distance origin location for measuring the straight line distance between the origin location and autocomplete predictions.<br><br>_References_: [LatLng](#latlng) |
| **types** | `string[] | undefined` | The filter applied to an autocomplete request to restrict results using up to 5 different place types. |

#### AutocompletePrediction

| **Description** |
| Represents a prediction of a place. |

**Properties**

| **Name** | **Type** | **Description** |
| **fullText** | `string` | The full description of the prediction. |
| **placeID** | `string` | A property representing the place ID of the prediction, suitable for use in a place details request. |
| **primaryText** | `string` | The main text of a prediction, usually the name of the place. |
| **types** | `string[]` | The types of this autocomplete result. |
| **distanceMeters** | `number | undefined` | The straight line distance in meters between the origin and this prediction if a valid origin is specified in the [AutocompleteFilter](#autocompletefilter) of the request. |
| **secondaryText** | `string | undefined` | The secondary text of a prediction, usually the location of the place. |

#### LatLng

| **Description** |
| Represents a latitude/longitude pair. |

**Properties**

| **latitude** | `number` | The latitude in degrees. |
| **longitude** | `number` | The longitude in degrees. |

#### LocationBounds

| **Description** |
| Represents a rectangular area in geographical coordinates. |

**Properties**

| **northEastBounds** | `LatLng` | The northwest corner of the bounds.<br><br>_References_: [LatLng](#latlng) |
| **southWestBounds** | `LatLng` | The southeast corner of the bounds.<br><br>_References_: [LatLng](#latlng) |
