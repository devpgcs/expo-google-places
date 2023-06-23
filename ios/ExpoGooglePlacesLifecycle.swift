import ExpoModulesCore
import GooglePlaces

public class ExpoGooglePlacesLifecycle: ExpoAppDelegateSubscriber {
    public func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        // Override point for customization after application launch.
        let googleAPIKey = Bundle.main.infoDictionary?["GMSPlacesAPIKey"]
        let placesClientInitialized = GMSPlacesClient.provideAPIKey(googleAPIKey as? String ?? "")
        
        if placesClientInitialized {
            log.info("[ExpoGooglePlacesLifecycle] The GMSPlacesAPIKey was provided successfully. GMSPlacesClient initialized")
        } else {
            log.error("[ExpoGooglePlacesLifecycle] No GMSPlacesAPIKey provided.")
        }
       
        return true
    }
}
