---
layout: home
title: Getting started
---

If you'd like to use this library right away, just complete the following steps for quick setup:

<br />

## 1. Create a new Expo project (optional)

Make sure you have an existing Expo project. Otherwise, open a new terminal and run the following command:

```
npx create-expo-app MyProjectWithPlaces
```

<br />

## 2. Install the library

Once you have an existing Expo project you must open the root folder to install the library, to do it so, you must run the following commands:

```
  cd MyProjectWithPlaces
  npx expo install expo-google-places
```

<br />

## 3. Configure the plugin

Once the library is installed you must open the `app.json` file and add the following lines:

```json
{
  "expo": {
    "plugins": {
      [
        "expo-google-places",
        "YOUR_GOOGLE_API_KEY_HERE"
      ]
    }
  }
}
```

**NOTE:** Replace the `YOUR_GOOGLE_API_KEY_HERE` with your Google API key.
