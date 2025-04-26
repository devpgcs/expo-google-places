---
layout: page
title: Changelog
---

This is the log of notable changes to the Expo Google Places library. Is recommended to check this page before updating the library to a new version.

## v0.2.6 - 2025-04-25

- `android/build.gradle` following the Expo SDK 51 [Modernized build.gradle diff](https://gist.github.com/brentvatne/88e27545243b828554bb376a7e6dd08d) gist published by [@brentvatne](https://github.com/brentvatne).
- `/example/android` and `/example/ios` folders removed to solve `expo-doctor` issues

## v0.2.5 - 2024-02-21

#### Support for Expo SDK 50

- The `android/build.gradle` file has been updated to support Expo SDK 50 following the [Gradle Migration](https://github.com/expo/fyi/blob/main/expo-modules-gradle8-migration.md#error-task-current-target-is-17-and-compilereleasekotlin-task-current-target-is-11-jvm-target-compatibility-should-be-set-to-the-same-java-version) guide published by Expo.
- The `ios/ExpoGooglePlaces.podspec` file has been updated to support Expo SDK 50 following the [Upgrading your app](https://expo.dev/changelog/2024/01-18-sdk-50#%E2%9E%A1%EF%B8%8F-upgrading-your-app) steps published by Expo.
- The `ios/ExpoGooglePlacesMiscellaneous.swift` file has been updated so the `LatLng` and `LocationBoundsFilter` structures conform to the `AnyArgument` protocol which looks to be required by the Expo SDK 50.

## v0.2.4 - 2023-10-26

#### Support when also using React Native Maps library

- If you're using the [React Native Maps](https://github.com/react-native-maps/react-native-maps) library you must update the Expo Google Places library to the version **>= 0.2.4** since the versions **<= 0.2.3** use an application meta-data with `com.google.android.geo.API_KEY` key to initialize the Expo Google Places library. This key is also used by the React Native Maps library to initialize the Google Maps library and this causes a conflict between the two libraries due to overwrites.
- If you still want to share the same API key for both libraries you must restrict it to the **Maps SDK for Android** and **Places API**. This is required for the Expo Google Places with a version **<= 0.2.3**.

## v0.2.3 - 2023-10-20

#### Support for Expo SDK 49

- The `android/build.gradle` file has been updated to support Expo SDK 49 following the [Gradle Migration](https://github.com/expo/fyi/blob/main/expo-modules-gradle8-migration.md) guide published by Expo. ([#8](https://github.com/devpgcs/expo-google-places/pull/8) by [@fukuli053](https://github.com/fukuli053))
