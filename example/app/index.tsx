import { StyleSheet, Text, View } from "react-native";
import { Link, Stack } from "expo-router";
import * as WebBrowser from "expo-web-browser";

import theme from "../theme";

const Root = () => {
  return (
    <View style={theme.container}>
      <Stack.Screen
        options={{
          title: "Expo Google Places",
        }}
      />

      <Text style={styles.heading}>Welcome to Expo Google Places!</Text>

      <Text style={styles.description}>
        The following are examples of the{" "}
        <Text
          style={theme.textLink}
          onPress={() => WebBrowser.openBrowserAsync("https://devpgcs.github.io/expo-google-places/guides.html")}
        >
          Guides
        </Text>{" "}
        documentation:
      </Text>

      <Link href={{ pathname: "/guides/per-session/autocomplete" }} style={theme.textLink}>
        1. Per Session (session-based) approach
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    textAlign: "center",
    ...theme.heading,
  },
  description: {
    marginVertical: 32,
    ...theme.text,
  },
});

export default Root;
