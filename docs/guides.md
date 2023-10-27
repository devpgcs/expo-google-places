---
layout: page
title: Guides
---

To help you to understand how to use the library, we have created a set of guides that will help you to get started with some of the most common use cases.

<br>

## Per Session (session-based) approach

If your application requires Place Details such as the place name, business status, or opening hours, your implementation of Place Autocomplete should use a session token for a total cost of $0.017 [per session](https://developers.google.com/maps/billing-and-pricing/pricing#about-autocomplete-sessions) plus applicable [Places Data SKUs](https://developers.google.com/maps/billing-and-pricing/pricing#data-skus) depending on which place data fields you request.

<br>

<iframe width="100%" height="500" src="https://www.youtube.com/embed/kW61cYf_-PA?si=7Cz_b-R-jvUthDM-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<br>

### Take what you need

As you can see in the video above you can get partial data of the place details specifying the place fields that you want to receive. This is strongly recommended since there are a lot of data that you may don't need and will generate a SKU charge.

<br>

### Under the hood

Once the module is created, a session token will be automatically created for you and will be used to make the requests to the Google Places API with the autocomplete service. The session token will be automatically refreshed once a user fetches the place details.

<br>

### Implementation

Since we already handle the session token and the whole logic to support both Android and iOS platforms for you, the implementation is pretty simple. You just need to complete the following steps:

| **NOTE** |
| If you have not completed the [Getting Started](/expo-google-places/#want-to-give-it-a-try) guide, please do so before proceeding. |

<br>

#### 1. Import the library

```tsx
import * as ExpoGooglePlaces from "expo-google-places";
```

<br>

#### 2. Fetch predictions

The [fetchPredictionsWithSession](/expo-google-places/api/#fetchpredictionswithsessioninputtext-filter) method is the one designed to fetch the predictions using the session-based approach making a single request to the Google Places API with the Autocomplete Service.

```tsx
const fetchPredictions = async (search: string) => {
  try {
    const predictions = await ExpoGooglePlaces.fetchPredictionsWithSession(search, {
      countries: ["us"],
    });
    // Do something with the predictions like set them
    // into a state and render them in a list
  } catch (error) {
    console.log("Error fetching predictions", error);
  }
};
```

It takes two arguments in the example above, the first one `search` is the text that the user has typed in the search input and the second one (which is optional) `{ countries: ["us"] }` is an object where you can specify the restrictions that you want to apply to the predictions.

<br>

#### 3. Fetch place details

The [fetchPlaceWithSession](/expo-google-places/api/#fetchplacewithsessionplacefields-extends-keyof-placeplaceid-placefields) method is the one designed to fetch the place details using the session-based approach making a single request to the Google Places API with the Places Service.

```tsx
const fetchPlace = async (placeID: string) => {
  try {
    const placeDetails = await ExpoGooglePlaces.fetchPlaceWithSession(placeID, [
      "name",
      "formattedAddress",
      "coordinate",
    ]);
    // Do something with the details like storing them into a state
    // and displaying them in the UI and/or in a map
  } catch (error) {
    console.log("Error fetching place details", error);
  }
};
```

It takes two arguments in the example above, the first one `placeID` is the unique identifier of the place that you want to fetch the details and the second one (which is optional) `["name", "formattedAddress", "coordinate"]` is an array of strings where you can specify the place fields that you want to receive.

<br>

### Conclusion

As you can see, the implementation is pretty simple and straightforward. You just need to use the methods that we provide you according to your needs and we will handle the rest for you.

<br>

## Per Request approach

🚧 Under construction
