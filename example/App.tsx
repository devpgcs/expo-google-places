import { StyleSheet, Text, View } from "react-native";

import * as ExpoGooglePlaces from "expo-google-places";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    ExpoGooglePlaces.fetchWithSession("San Francisco", { types: ["geocode"] }).then((predictions) => {
      console.log(JSON.stringify(predictions, null, 4));
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hello Google Places module!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
