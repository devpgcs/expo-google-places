import * as ExpoGooglePlaces from "expo-google-places";

import { useCallback, useState } from "react";
import { useFocusEffect, useLocalSearchParams } from "expo-router";
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from "react-native";

import theme from "../../../theme";
import { PlaceDetailsScreenParams } from "../../types/place-details-screen-params.type";

type PlaceDetailsEntry = [string, any];

export default function PlaceDetailsExample() {
  const [placeDetails, setPlaceDetails] =
    useState<Pick<ExpoGooglePlaces.Place, "name" | "formattedAddress" | "coordinate">>();

  const { placeId } = useLocalSearchParams<PlaceDetailsScreenParams>();

  const sortDetailsByKeys = useCallback((a: PlaceDetailsEntry, b: PlaceDetailsEntry) => {
    const keyA = a[0];
    const keyB = b[0];

    if (keyA < keyB) {
      return -1;
    }

    if (keyA > keyB) {
      return 1;
    }

    return 0;
  }, []);

  const fetchPlace = async (placeID: string) => {
    try {
      const placeDetails = await ExpoGooglePlaces.fetchPlaceWithSession(placeID, [
        "name",
        "formattedAddress",
        "coordinate",
      ]);
      setPlaceDetails(placeDetails);
    } catch (error) {
      console.log("Error fetching place details", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      if (placeId) {
        fetchPlace(placeId);
      }
    }, [placeId])
  );

  if (!placeDetails) {
    return <ActivityIndicator style={{ paddingVertical: theme.container.paddingVertical }} />;
  }

  return (
    <ScrollView contentContainerStyle={styles.safeScroll}>
      <View style={theme.container}>
        <Text style={theme.heading}>{placeDetails.name}</Text>
        <Text style={theme.text}>{placeDetails.formattedAddress}</Text>

        <View style={{ width: "100%", marginTop: 32 }}>
          {Object.entries(placeDetails)
            .sort(sortDetailsByKeys)
            .map(([key, value]) => (
              <View key={key} style={styles.detailsCard}>
                <Text style={styles.detailsCardHeading}>{key}</Text>
                <Text style={styles.detailscardText}>{JSON.stringify(value, null, 4)}</Text>
              </View>
            ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  safeScroll: {
    flexGrow: 1,
  },
  detailsCard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#eee",
    flex: 1,
  },
  detailsCardHeading: {
    ...theme.subHeading,
    fontSize: 20,
    marginBottom: 8,
  },
  detailscardText: {
    ...theme.text,
    fontSize: 12,
  },
});
