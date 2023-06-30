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
      <Text>Search an address</Text>

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
