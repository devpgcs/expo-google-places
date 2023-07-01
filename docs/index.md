---
layout: page
title: Getting started
---

Hi there! I'm glad you're interested in using this library. This page will help you get started with the library but, before you start, let's talk about the library and the needs it covers.

<br>

## What is this library for?

If you are building an application that needs to use Google Places API, this library is for you. This library is built with the native Google Places API SDKs for Android and iOS, so you can use all the features provided by the native SDKs without having to write native code since this library provides you with an API written in TypeScript.

| **NOTE** |
| It can be used in a project made with only JavaScript as well but it’s recommended to use it in a project made with TypeScript to take advantage of the type definitions. |

<br>

## Why should I use this library?

Well, this library has been built having in mind some issues encountered trying to implement the Google Places API in a React Native or Expo project with other libraries or using the Google Places API for JavaScript directly.

| **Reasons** |
| There's no way to restrict the Google API key using the Google Places API for JavaScript which generates a security issue because you can't restrict the API key to be used only in your app. |
| The APIs provided by other libraries don't provide you the full API provided by the native SDKs and you lose control over things like:<br><br>- Autocomplete filters like bounds, countries, etc.<br>- Fetching the place fields you need, which improves the cost optimization<br>- And so on.<br><br>In the end, that kind of stuff helps you to build custom UI for your needs |
| The API's provided by other libraries doesn't care about the cost optimization of the API calls, for example making a request with the session-based approach or the Autocomplete + Geocoding approach. |

<br>

## Want to give it a try?

If you already know the benefits of this library or you just want to give it a try, follow the next steps to install the library in your project:

<br>

### Requirements

Before you start, make sure you have the following:

1. **Google Cloud project** with the Google Places API enabled. If not, [create one](https://developers.google.com/workspace/guides/create-project).
2. **Billing account** linked with the Google Cloud project. If not, [create one](https://cloud.google.com/billing/docs/how-to/create-billing-account) and link it.
3. **The Places API** is enabled in your Google Cloud project. If not, [enable it](https://console.cloud.google.com/apis/library/places-backend.googleapis.com). You will be asked to enable all the Google Maps APIs but you don't have to if you don't really need them.
4. **API key for Android** in your Google Cloud project. If not, [create one](https://console.cloud.google.com/apis/credentials), restrict it with the package name of your app and enable the Places API.
5. **API key for iOS** in your Google Cloud project. If not, [create one](https://console.cloud.google.com/apis/credentials), restrict it with the bundle identifier of your app and enable the Places API.

| **NOTE** |
| The steps to restrict the API keys are mixed with the ["Configure the app"](#3-configure-the-app) step where you set the iOS bundle identifier and Android package name. So, you can continue reading and once you reach that step you can go back and complete the steps 4 and 5 to restrict the API keys.<br><br>Even for Android, you need the SHA-1 certificate fingerprint which will be generated after you finish the ["Prepare the app"](#4-prepare-the-app) step. |

<br>

### Expo managed workflow 🤖

#### 1. Create a new Expo project (optional)

Make sure you have an existing Expo project. Otherwise, open a new terminal and run the following command:

```
npx create-expo-app MyProjectWithPlaces --template
```

| **NOTE** |
| Select the `Blank` template if you want the project with JavaScript or the `Blank (TypeScript)` template if you want the project with TypeScript. |

<br>

#### 2. Install the library

Once you have an existing Expo project you must open the root folder to install the library, to do it so, you must run the following commands:

```
cd MyProjectWithPlaces
npx expo install expo-google-places
```

<br />

#### 3. Configure the app

Once the library is installed open the **app.json** file and add the following to configure the app to use the Google Places API:

```
{
  "expo": {
    // ...
    "android": {
      // ...
      "package": "com.yourcompany.yourappname",
    },
    "ios": {
      // ...
      "bundleIdentifier": "com.yourcompany.yourappname",
    },
    "plugins": [
      // ...
      [
        "expo-google-places",
        {
          "androidApiKey": "GOOGLE_API_KEY_FOR_ANDROID",
          "iosApiKey": "GOOGLE_API_KEY_FOR_IOS"
        }
      ]
    ]
  }
}
```

| **NOTE** |
| Don't forget to replace the `GOOGLE_API_KEY_FOR_IOS` and `GOOGLE_API_KEY_FOR_ANDROID` with your Google API keys and restrict them with the bundle identifier and package name respectively. |

<br>

#### 4. Prepare the app

To be able to use this library you must configure your app to use the Expo managed workflow, to do it so, you must run the following command in the root folder of your project:

```
npx expo prebuild
```

Then, one of the following depending on the platform you want to use:

```
npm run android
npm run ios
```

<br>

### Bare React Native project ⚛️

🚧 Under construction

<br>

## Use the library

Now that you have the library installed in your project, you can start using it. Follow one of the [guides](/expo-google-places/guides) depending on your needs.
