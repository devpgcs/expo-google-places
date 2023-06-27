/**
 * Describes the input for the plugin which is the API key for Android and iOS provided by the
 * developer in the **app.json** or **app.config.(js|ts)** file.
 */
export interface ExpoGooglePlacesPluginInput {
  /**
   * The Google API key for Android.
   */
  androidApiKey?: string;
  /**
   * The Google API key for iOS.
   */
  iosApiKey?: string;
}
