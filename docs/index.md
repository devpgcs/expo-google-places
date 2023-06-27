---
layout: page
title: Getting started
---

If you'd like to use this library right away, just complete the following steps for quick setup:

<br />

### 1. Create a new Expo project (optional)

Make sure you have an existing Expo project. Otherwise, open a new terminal and run the following command:

```
npx create-expo-app MyProjectWithPlaces
```

<br />

### 2. Install the library

Once you have an existing Expo project you must open the root folder to install the library, to do it so, you must run the following commands:

```
  cd MyProjectWithPlaces
  npx expo install expo-google-places
```

<br />

### 3. Configure the plugin

Once the library is installed you must add the following plugin config into your `plugins` array inside of the **app.json** file and replace the `GOOGLE_API_KEY` with your Google API key:

| **app.json** |
| `["expo-google-places", "GOOGLE_API_KEY"]` |

### 4. Use the library

Now you can use the library inside of your project, for example:

```tsx
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

import * as ExpoGooglePlaces from "expo-google-places";
import { useState } from "react";
import { AutocompletePrediction } from "expo-google-places";

export default function App() {
  const [predictions, setPredictions] = useState<AutocompletePrediction[]>([]);

  const fetchPlace = async (placeID: string) => {
    try {
      const placeDetails = await ExpoGooglePlaces.fetchPlaceWithSession(placeID, ["formattedAddress"]);
      console.log("Place details", JSON.stringify(placeDetails, null, 4));
    } catch (error) {
      console.log("Error fetching place details", error);
    }
  };

  const fetchPredictions = async (search: string) => {
    try {
      const predictions = await ExpoGooglePlaces.fetchPredictionsWithSession(search);
      setPredictions(predictions);
    } catch (error) {
      console.log("Error fetching predictions", error);
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
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
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
