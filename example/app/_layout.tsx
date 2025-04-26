import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import theme from "../theme";

export default function Layout() {
  return (
    <>
      <Stack
        initialRouteName="index"
        screenOptions={{
          headerStyle: theme.primaryBg,
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="guides/per-session/place-details"
          options={{
            presentation: "modal",
            title: "Place Details",
          }}
        />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}
