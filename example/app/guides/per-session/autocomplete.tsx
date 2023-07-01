import * as ExpoGooglePlaces from "expo-google-places";

import { useState } from "react";
import { Link, Stack } from "expo-router";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

import theme, { PRIMARY_COLOR } from "../../../theme";
import { PlaceDetailsScreenParams } from "../../types/place-details-screen-params.type";

export default function AutocompleteExample() {
  const [predictions, setPredictions] = useState<ExpoGooglePlaces.AutocompletePrediction[]>([]);
  const [inputStyles, setInputStyles] = useState(styles.input);

  const fetchPredictions = async (search: string) => {
    try {
      const predictions = await ExpoGooglePlaces.fetchPredictionsWithSession(search, {
        countries: ["us"],
      });
      setPredictions(predictions);
    } catch (error) {
      console.log(`[Example App (${Platform.OS.toUpperCase()})] Error fetching predictions`, error);
    }
  };

  const _handleInputStyles = (isFocused: boolean) => () => {
    setInputStyles(isFocused ? { ...styles.input, borderColor: `rgb(${PRIMARY_COLOR})` } : styles.input);
  };

  return (
    <KeyboardAvoidingView
      style={styles.safeScroll}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={theme.container.paddingVertical * 2}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}>
        <View style={theme.container}>
          <Stack.Screen
            options={{
              title: "Per Session",
            }}
          />

          <Text style={styles.heading}>Per Session (session-based) example</Text>

          <Text style={styles.description}>
            In this example we're implementing the <Text style={{ fontWeight: "bold" }}>Places Autocomplete</Text> and
            the <Text style={{ fontWeight: "bold" }}>Place Details</Text> features of the Google Places API.
          </Text>

          <TextInput
            placeholder="Search an address"
            style={inputStyles}
            onChangeText={fetchPredictions}
            onFocus={_handleInputStyles(true)}
            onBlur={_handleInputStyles(false)}
          />

          {predictions.map((prediction) => (
            <View key={prediction.placeID} style={styles.prediction}>
              <Text style={styles.predictionText}>{prediction.fullText}</Text>
              <Link
                href={{
                  pathname: "/guides/per-session/place-details",
                  params: {
                    placeId: prediction.placeID,
                  } as PlaceDetailsScreenParams,
                }}
                style={styles.predictionLink}
              >
                Details
              </Link>
            </View>
          ))}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  safeScroll: {
    flex: 1,
  },
  heading: {
    textAlign: "center",
    ...theme.subHeading,
  },
  description: {
    marginVertical: 32,
    ...theme.text,
  },
  input: {
    marginVertical: 16,
    ...theme.input,
    ...theme.text,
  },
  prediction: {
    alignItems: "center",
    backgroundColor: "#fafafa",
    borderColor: "rgba(0,0,0,0.1)",
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    padding: 16,
  },
  predictionText: {
    flex: 1,
    marginRight: 16,
    ...theme.text,
  },
  predictionLink: {
    ...theme.textLink,
    width: "auto",
  },
});
