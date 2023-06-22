import { ConfigPlugin, withInfoPlist } from "@expo/config-plugins";

const withGoogleApiKey: ConfigPlugin<string> = (config, googlePlacesAPIKey) =>
  withInfoPlist(config, (finalConfig) => {
    finalConfig.modResults.GMSPlacesAPIKey = googlePlacesAPIKey;
    return finalConfig;
  });

export default withGoogleApiKey;
