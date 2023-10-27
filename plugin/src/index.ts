import { AndroidConfig, ConfigPlugin, withAndroidManifest, withInfoPlist } from "@expo/config-plugins";
import { ExpoGooglePlacesPluginInput } from "./interfaces/expo-google-places-plugin-input.interface";

// This is not being tested since is not a complex plugin and it's not worth it. Also, the best practices don't apply here.
// More info in: https://docs.expo.dev/config-plugins/development-and-debugging/#plugin-development-best-practices
const withGoogleApiKey: ConfigPlugin<ExpoGooglePlacesPluginInput> = (config, pluginInput) => {
  if (!pluginInput.androidApiKey) {
    console.warn('[ExpoGooglePlaces] "androidApiKey" is missing. If this was intentional, ignore this warning.');
  }

  if (!pluginInput.iosApiKey) {
    console.warn('[ExpoGooglePlaces] "iosApiKey" is missing. If this was intentional, ignore this warning.');
  }

  if (pluginInput.androidApiKey) {
    config = withAndroidManifest(config, (config) => {
      const mainApplication = AndroidConfig.Manifest.getMainApplicationOrThrow(config.modResults);

      AndroidConfig.Manifest.addMetaDataItemToMainApplication(
        mainApplication,
        // We're using this constant name because it's the recommended one by Google.
        // in the following documentation: https://developers.google.com/maps/documentation/places/android-sdk/config#get-an-api-key
        // check the NOTE under the step 6.
        `com.google.android.geo.PLACES_API_KEY`,
        pluginInput.androidApiKey!
      );

      return config;
    });
  }

  if (pluginInput.iosApiKey) {
    config = withInfoPlist(config, (finalConfig) => {
      finalConfig.modResults["GMSPlacesAPIKey"] = pluginInput.iosApiKey;
      return finalConfig;
    });
  }

  return config;
};

export default withGoogleApiKey;
