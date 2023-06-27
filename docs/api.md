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
| **filter** | `Partial<AutocompleteFilter> | undefined` | The filter to apply which helps to constrain the results to a specific area or type of place.<br><br>_References_: [AutocompleteFilter](#autocompletefilter). |

#### fetchPlaceWithSession<PlaceFields extends (keyof Place)[]>(placeID, placeFields)

| **Description** |
| Fetches place details asynchronously using the session-based approach and returns a place object. |
| **Returns** |
| `Promise<Pick<Place, PlaceFields[number]>>`<br><br>_References_: [Place](#place) |

**Parameters**

| **Name** | **Type** | **Description** |
| **placeID** | `string` | The place ID of the place to fetch details for. |
| **placeFields** | `PlaceFields | undefined` | The fields specifying the types of place data to return.<br><br>_References_: [Place](#place) |

## Constants

#### PRICE_LEVEL_MAX_VALUE

| **Description** |
| The highest price level possible, i.e very expensive. |
| **Value** |
| `4` |

#### PRICE_LEVEL_MIN_VALUE

| **Description** |
| The lowest price level possible. This denotes that a place is free. |
| **Value** |
| `0` |

#### RATING_MIN_VALUE

| **Description** |
| The lowest rating possible, i.e very bad. |
| **Value** |
| `1` |

#### RATING_MAX_VALUE

| **Description** |
| The highest rating possible, i.e very good. |
| **Value** |
| `5` |

## Enums

#### BooleanPlaceAttribute

| **Description** |
| Describes whether a place’s boolean attribute is available or not. |

**Values**

| **Name** | **Value** | **Description** |
| **UNKNOWN** | `0` | The place's attribute has not been requested yet, or not known. |
| **TRUE** | `1` | The place's attribute is available. |
| **FALSE** | `2` | The place's attribute is not available. |

#### DayOfWeek

| **Description** |
| Represents a day of the week. |

**Values**

| **Name** | **Value** | **Description** |
| **SUNDAY** | `1` | The day is Sunday |
| **MONDAY** | `2` | The day is Monday |
| **TUESDAY** | `3` | The day is Tuesday |
| **WEDNESDAY** | `4` | The day is Wednesday |
| **THURSDAY** | `5` | The day is Thursday |
| **FRIDAY** | `6` | The day is Friday |
| **SATURDAY** | `7` | The day is Saturday |

#### HoursType

| **Description** |
| Identifies the type of secondary opening hours.<br><br>Is only set for secondary opening hours (i.e. opening hours from `Place.secondaryOpeningHours`).<br><br>_References_: [Place](#place) |

**Values**

| **Name** | **Value** | **Description** |
| **ACCESS** | `0` | Access opening hours. |
| **BREAKFAST** | `1` | Breakfast opening hours. |
| **BRUNCH** | `2` | Brunch opening hours. |
| **DELIVERY** | `3` | Delivery opening hours. |
| **DINNER** | `4` | Dinner opening hours. |
| **DRIVE_THROUGH** | `5` | Drive through opening hours. |
| **HAPPY_HOUR** | `6` | Happy hour opening hours. |
| **KITCHEN** | `7` | Kitchen opening hours. |
| **LUNCH** | `8` | Lunch opening hours. |
| **ONLINE_SERVICE_HOURS** | `9` | Online service opening hours. |
| **PICKUP** | `10` | Pickup opening hours. |
| **SENIOR_HOURS** | `11` | Senior hours opening hours. |
| **TAKEOUT** | `12` | Takeout opening hours. |

#### PlacesBusinessStatus

| **Description** |
| The business status of a place. |

**Values**

| **Name** | **Value** | **Description** |
| **UNKNOWN** | `-1` | The business status is not known. (**iOS only**) |
| **OPERATIONAL** | `0` | The business is operational. |
| **CLOSED_TEMPORARILY** | `1` | The business is closed temporarily. |
| **CLOSED_PERMANENTLY** | `2` | The business is closed permanently. |

#### PlacesPriceLevel (iOS only)

| **Description** |
| Describes the price level of a place. |

**Values**

| **Name** | **Value** | **Description** |
| **UNKNOWN** | `-1` | The place price level is not known. |
| **FREE** | `0` | The place price level is free. |
| **CHEAP** | `1` | The place price level is cheap. |
| **MEDIUM** | `2` | The place price level is medium. |
| **HIGH** | `3` | The place price level is high. |
| **EXPENSIVE** | `4` | The place price level is expensive. |

## Interfaces

#### AddressComponent

| **Description** |
| Represents a component of an address, e.g., street number, postcode, city, etc. |

**Properties**

| **Name** | **Type** | **Description** |
| **name** | `string` | Name of the address component, e.g. "Sydney". |
| **shortName** | `string` | Short name of the address component, e.g. "AU". |
| **types** | `string[]` | Types of the AddressComponent. For example, "country" or "administrative*area_level_1".<br><br>References*: [PlaceTypesTableOne, PlaceTypesTableTwo, PlaceTypesTableThree](https://developers.google.com/maps/documentation/places/web-service/supported_types) |

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

#### LocalTime

| **Description** |
| Represents a local time with just hours and minutes. |

**Properties**

| **Name** | **Type** | **Description** |
| **hour** | `number` | The hours in 24 hour format. i.e. 0-23. |
| **minute** | `number` | The minutes. i.e. 0-59. |

#### LocationBounds

| **Description** |
| Represents a rectangular area in geographical coordinates. |

**Properties**

| **northEastBounds** | `LatLng` | The northwest corner of the bounds.<br><br>_References_: [LatLng](#latlng) |
| **southWestBounds** | `LatLng` | The southeast corner of the bounds.<br><br>_References_: [LatLng](#latlng) |

#### OpeningHours

| **Description** |
| Represents information on when a `Place` will be open during the week.<br><br>_References_: [Place](#place) |

**Properties**

| **Name** | **Type** | **Description** |
| **hoursType** | `HoursType | undefined` | The `HoursType` of the opening hours. (**Android only**)<br><br>_References_: [HoursType](#hourstype) |
| **periods** | `Period[] | undefined` | A list of `Period` objects that provide more detailed information that is equivalent to the data provided by `OpeningHours.weekdayText`.<br><br>_References_: [Period](#period) |
| **specialDays** | `SpecialDay[] | undefined` | A list of up to seven `SpecialDay` entries, corresponding to the next seven days. (**Android only**)<br><br>_References_: [SpecialDay](#specialday) |
| **weekdayText** | `string[] | undefined` | A list of strings that represent opening and closing hours in human readable form. |

#### Period

| **Description** |
| Represents a time segment. It may contain an open `TimeOfWeek`, or a close `TimeOfWeek`, or both.<br><br>_References_: [TimeOfWeek](#timeofweek) |

**Properties**

| **Name** | **Type** | **Description** |
| **closeEvent** | `TimeOfWeek | null` | The time marker for when the `Place` closes or `null` if it's always open.<br><br>_References_: [Place](#place), [TimeOfWeek](#timeofweek) |
| **openEvent** | `TimeOfWeek` | The time marker for when the `Place` opens.<br><br>_References_: [Place](#place), [TimeOfWeek](#timeofweek) |

#### PhotoMetadata

| **Description** |
| The metadata corresponding to a single photo associated with a place. |

**Properties**

| **Name** | **Type** | **Description** |
| **attributions** | `string` | The attributions in HTML format, or an empty string if there are none. |
| **height** | `number` | The maximum height in which the photo is available. |
| **width** | `number` | The maximum width in which the photo is available. |

#### Place

| **Description** |
| Represents a particular physical place.<br><br>A Place encapsulates information about a physical location, including its name, address, and any other information we might have about it.<br><br>**Note**: In general, some fields will be inapplicable to certain places, or the information may not exist. |

**Properties**

| **Name** | **Type** | **Description** |
| **addressComponents** | `AddressComponent[]` | The address components of the Place's location.<br><br>_References_: [AddressComponent](#addresscomponent) |
| **businessStatus** | `PlacesBusinessStatus` | The business status of the Place.<br><br>_References_: [PlacesBusinessStatus](#placesbusinessstatus) |
| **coordinate** | `LatLng` | The location of the Place.<br><br>_References_: [LatLng](#latlng) |
| **curbsidePickup** | `BooleanPlaceAttribute` | The BooleanPlaceAttribute for curbside pickup.<br><br>_References_: [BooleanPlaceAttribute](#booleanplaceattribute) |
| **delivery** | `BooleanPlaceAttribute` | The BooleanPlaceAttribute for delivery.<br><br>_References_: [BooleanPlaceAttribute](#booleanplaceattribute) |
| **dineIn** | `BooleanPlaceAttribute` | The BooleanPlaceAttribute for indoor or outdoor seating options.<br><br>_References_: [BooleanPlaceAttribute](#booleanplaceattribute) |
| **formattedAddress** | `string` | Human-readable address for the Place. |
| **iconBackgroundColor** | `string` | The string of the icon background color. |
| **iconImageURL** | `string` | The icon PNG URL string to the Places's type. |
| **name** | `string` | The name of the Place. |
| **openingHours** | `OpeningHours` | The Place's normal business hours.<br><br>_References_: [OpeningHours](#openinghours) |
| **placeID** | `string` | The unique ID of the Place. |
| **phoneNumber** | `string` | The place's phone number in international format. |
| **photos** | `PhotoMetadata[]` | The metadata for a photo associated with a place.<br><br>_References_: [PhotoMetadata](#photometadata) |
| **priceLevel** | `PlacesPriceLevel | number` | The price level for the place on a scale from `PRICE_LEVEL_MIN_VALUE` to `PRICE_LEVEL_MAX_VALUE`.<br><br>_References_: [PlacesPriceLevel](#placespricelevel-ios-only), [PRICE_LEVEL_MIN_VALUE](#price_level_min_value), [PRICE_LEVEL_MAX_VALUE](#price_level_max_value) |
| **plusCode** | `PlusCode` | The `PlusCode` location of the Place<br><br>_References_: [PlusCode](#pluscode) |
| **rating** | `number` | The place's rating, from `RATING_MIN_VALUE` to `RATING_MAX_VALUE`, based on aggregated user reviews.<br><br>_References_: [RATING_MIN_VALUE](#rating_min_value), [RATING_MAX_VALUE](#rating_max_value) |
| **reservable** | `BooleanPlaceAttribute` | The `BooleanPlaceAttribute` for reservations.<br><br>_References_: [BooleanPlaceAttribute](#booleanplaceattribute) |
| **servesBeer** | `BooleanPlaceAttribute` | The `BooleanPlaceAttribute` for serving beer.<br><br>_References_: [BooleanPlaceAttribute](#booleanplaceattribute) |
| **servesBreakfast** | `BooleanPlaceAttribute` | The `BooleanPlaceAttribute` for serving breakfast.<br><br>_References_: [BooleanPlaceAttribute](#booleanplaceattribute) |
| **servesBrunch** | `BooleanPlaceAttribute` | The `BooleanPlaceAttribute` for serving brunch.<br><br>_References_: [BooleanPlaceAttribute](#booleanplaceattribute) |
| **servesDinner** | `BooleanPlaceAttribute` | The `BooleanPlaceAttribute` for serving dinner.<br><br>_References_: [BooleanPlaceAttribute](#booleanplaceattribute) |
| **servesLunch** | `BooleanPlaceAttribute` | The `BooleanPlaceAttribute` for serving lunch.<br><br>_References_: [BooleanPlaceAttribute](#booleanplaceattribute) |
| **servesVegetarianFood** | `BooleanPlaceAttribute` | The `BooleanPlaceAttribute` for serving vegetarian food.<br><br>_References_: [BooleanPlaceAttribute](#booleanplaceattribute) |
| **servesWine** | `BooleanPlaceAttribute` | The `BooleanPlaceAttribute` for serving wine.<br><br>_References_: [BooleanPlaceAttribute](#booleanplaceattribute) |
| **takeout** | `BooleanPlaceAttribute` | The `BooleanPlaceAttribute` for takeout service.<br><br>_References_: [BooleanPlaceAttribute](#booleanplaceattribute) |
| **types** | `string[]` | A list of place types for the Place.<br><br>_References_: [PlaceTypesTableOne, PlaceTypesTableTwo, PlaceTypesTableThree](https://developers.google.com/maps/documentation/places/web-service/supported_types) |
| **utcOffsetMinutes** | `number` | The number of minutes this place’s current timezone is offset from UTC. |
| **userRatingsTotal** | `number` | The total number of user ratings of the Place. |
| **viewportInfo** | `LocationBounds` | A viewport for displaying this Place.<br><br>_References_: [LocationBounds](#locationbounds) |
| **website** | `string` | The URI of the website of this Place. |
| **wheelchairAccessibleEntrance** | `BooleanPlaceAttribute` | The `BooleanPlaceAttribute` for wheelchair accessible entrance.<br><br>_References_: [BooleanPlaceAttribute](#booleanplaceattribute) |
| **secondaryOpeningHours** | `OpeningHours | undefined` | The Place's secondary hours of operation(s) over the next seven days. (**Android only**)<br><br>_References_: [OpeningHours](#openinghours) |

#### PlusCode

| **Description** |
| Plus Code, or Open Location Code (OLC), is a geocode system for identifying any geographical area on Earth, even when a street address does not exist. |

**Properties**

| **Name** | **Type** | **Description** |
| **compoundCode** | `string` | The compound plus code, e.g. "9G8F+5W Zurich, Switzerland". |
| **globalCode** | `string` | The geo plus code, e.g. "8FVC9G8F+5W". |

#### SpecialDay

| **Description** |
| Represents information on a particular day over the next seven days which may have opening hours that differ from the normal operating hours. |

**Properties**

| **Name** | **Type** | **Description** |
| **date** | `string` | The date for which there may be exceptional hours. |
| **isExceptional** | `boolean` | Whether or not the day has exceptional hours. |

#### TimeOfWeek

| **Description** |
| Represents the opening or closing details for a `Period`.<br><br>_References_: [Period](#period) |

**Properties**

| **Name** | **Type** | **Description** |
| **day** | `DayOfWeek` | The day of the week.<br><br>_References_: [DayOfWeek](#dayofweek) |
| **time** | `LocalTime` | The `LocalDate` of the opening or close details.<br><br>_References_: [LocalTime](#localtime) |
| **date** | `string | undefined` | Date as a string in YYYY-MM-DD format, such as 2007-12-31. (**Android only**) |
