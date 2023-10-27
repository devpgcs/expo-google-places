---
layout: page
title: Changelog
---

This is the log of notable changes to the Expo Google Places library. Is recommended to check this page before updating the library to a new version.

## v0.2.4 - 2023-10-26

#### Support when also using React Native Maps library

- If you're using the [React Native Maps](https://github.com/react-native-maps/react-native-maps) library you must update the Expo Google Places library to the version **>= 0.2.4** since the versions **<= 0.2.3** use an application meta-data with `com.google.android.geo.API_KEY` key to initialize the Expo Google Places library. This key is also used by the React Native Maps library to initialize the Google Maps library and this causes a conflict between the two libraries due to overwrites.
- If you still want to share the same API key for both libraries you must restrict it to the **Maps SDK for Android** and **Places API**. This is required for the Expo Google Places with a version **<= 0.2.3**.

## v0.2.3 - 2023-10-20

#### Support for Expo SDK 49

- The `android/build.gradle` file has been updated to support Expo SDK 49 following the [Gradle Migration](https://github.com/expo/fyi/blob/main/expo-modules-gradle8-migration.md) guide published by Expo. ([#8](https://github.com/devpgcs/expo-google-places/pull/8) by [@fukuli053](https://github.com/fukuli053))
