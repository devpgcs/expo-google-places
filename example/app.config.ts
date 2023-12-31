import { ConfigContext, ExpoConfig } from "@expo/config";

require("dotenv").config();

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: config.name || "Example: Expo Google Places",
  slug: config.slug || "expo-google-places",
  plugins: [
    ...(config.plugins || []),
    [
      "expo-google-places",
      {
        androidApiKey: process.env.GOOGLE_PLACES_API_KEY_FOR_ANDROID,
        iosApiKey: process.env.GOOGLE_PLACES_API_KEY_FOR_IOS,
      },
    ],
  ],
});
