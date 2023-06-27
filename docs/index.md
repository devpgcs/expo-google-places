---
layout: page
title: Getting started
---

Hi there! I'm glad you're interested in using this library. This page will help you get started with the library but, before you start, let's talk about the library and the needs it covers.

<br>

## What is this library for?

If you are building an application that needs to use Google Places API, this library is for you. This library is built with the native Google Places API SDKs for Android and iOS, so you can use all the features provided by the native SDKs without having to write native code since this library provides you with an API written in TypeScript.

| **NOTE** |
| It can be used in a project made with only JavaScript as well but it’s recommended to use it in a project made with TypeScript to take advantage of the type definitions. |

<br>

## Why should I use this library?

Well, this library has been built having in mind some issues encountered trying to implement the Google Places API in a React Native or Expo project with other libraries or using the Google Places API for JavaScript directly.

| **Reasons** |
| There's no way to restrict the Google API key using the Google Places API for JavaScript which generates a security issue because you can't restrict the API key to be used only in your app. |
| The APIs provided by other libraries don't provide you the full API provided by the native SDKs and you lose control over things like:<br><br>- Autocomplete filters like bounds, countries, etc.<br>- Fetching the place fields you need, which improves the cost optimization<br>- And so on.<br><br>In the end, that kind of stuff helps you to build custom UI for your needs |
| The API's provided by other libraries doesn't care about the cost optimization of the API calls, for example making a request with the session-based approach or the Autocomplete + Geocoding approach. |

<br>

## Want to give it a try?

If you already know the benefits of this library or you just want to give it a try, follow the next steps to install the library in your project:

<br>

### Expo managed workflow 🤖

#### 1. Create a new Expo project (optional)

Make sure you have an existing Expo project. Otherwise, open a new terminal and run the following command:

```
npx create-expo-app MyProjectWithPlaces --template
```

| **NOTE** |
| Select the `Blank` template if you want the project with JavaScript or the `Blank (TypeScript)` template if you want the project with TypeScript. |

<br>

#### 2. Install the library

Once you have an existing Expo project you must open the root folder to install the library, to do it so, you must run the following commands:

```
cd MyProjectWithPlaces
npx expo install expo-google-places
```

<br />

#### 3. Configure the app

Once the library is installed open the **app.json** file and add the following to configure the app to use the Google Places API:

```
{
  "expo": {
    // ...
    "android": {
      // ...
      "package": "com.yourcompany.yourappname",
    },
    "ios": {
      // ...
      "bundleIdentifier": "com.yourcompany.yourappname",
    },
    "plugins": [
      // ...
      [
        "expo-google-places",
        {
          "androidApiKey": "GOOGLE_API_KEY_FOR_ANDROID",
          "iosApiKey": "GOOGLE_API_KEY_FOR_IOS"
        }
      ]
    ]
  }
}
```

| **NOTE** |
| Don't forget to replace the `GOOGLE_API_KEY_FOR_IOS` and `GOOGLE_API_KEY_FOR_ANDROID` with your Google API keys and restrict them with the bundle identifier and package name respectively. |

<br>

#### 4. Prepare the app

To be able to use this library you must configure your app to use the Expo managed workflow, to do it so, you must run the following command in the root folder of your project:

```
npx expo prebuild
```

Then, one of the following depending on the platform you want to use:

```
npx expo run:android
npx expo run:ios
```

<br>

### Bare React Native project ⚛️

🚧 Under construction

<br>

## Use the library

Now you can use the library inside of your project, for example:

```tsx
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import * as ExpoGooglePlaces from "expo-google-places";

export default function App() {
  const [predictions, setPredictions] = useState<ExpoGooglePlaces.AutocompletePrediction[]>([]);

  const fetchPlace = async (placeID: string) => {
    try {
      const placeDetails = await ExpoGooglePlaces.fetchPlaceWithSession(placeID, ["formattedAddress"]);
      console.log("[Example App] Place details", JSON.stringify(placeDetails, null, 4));
    } catch (error) {
      console.log("[Example App] Error fetching place details", error);
    }
  };

  const fetchPredictions = async (search: string) => {
    try {
      const predictions = await ExpoGooglePlaces.fetchPredictionsWithSession(search);
      setPredictions(predictions);
    } catch (error) {
      console.log("[Example App] Error fetching predictions", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Hello Google Places module!</Text>

      <TextInput placeholder="Search an address" style={styles.input} onChangeText={fetchPredictions} />

      {predictions.map((prediction) => (
        <View key={prediction.placeID} style={styles.prediction}>
          <Text style={styles.predictionText}>{prediction.fullText}</Text>
          <Button title="Log" onPress={() => fetchPlace(prediction.placeID)} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 100,
  },
  input: {
    borderWidth: 1,
    width: "100%",
    padding: 16,
    marginVertical: 16,
  },
  prediction: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(0,0,0,0.1)",
    padding: 16,
    borderRadius: 12,
    marginTop: 4,
  },
  predictionText: {
    flex: 1,
  },
});
```
