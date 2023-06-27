import { ConfigPlugin, withInfoPlist } from "@expo/config-plugins";

// This is not being tested since is not a complex plugin and it's not worth it. Also, the best practices don't apply here.
// More info in: https://docs.expo.dev/config-plugins/development-and-debugging/#plugin-development-best-practices
const withGoogleApiKey: ConfigPlugin<string> = (config, googlePlacesAPIKey) =>
  withInfoPlist(config, (finalConfig) => {
    finalConfig.modResults.GMSPlacesAPIKey = googlePlacesAPIKey;
    return finalConfig;
  });

export default withGoogleApiKey;
