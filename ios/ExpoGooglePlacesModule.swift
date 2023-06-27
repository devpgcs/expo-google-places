import GooglePlaces
import ExpoModulesCore

public class ExpoGooglePlacesModule: Module {
    private var sessionToken = GMSAutocompleteSessionToken.init()
    private var autocompleteFetcherDelegate: AutocompleteFetcherDelegate?
        
    public func definition() -> ModuleDefinition {
        Name("ExpoGooglePlaces")
        
        AsyncFunction("fetchPredictionsWithSession") { (inputText: String, originalFilter: AutocompleteFilter?, promise: Promise) in
            // Creating a new delegate everytime, we are making sure that promise instance will change properly.
            //
            // Also, we must save the delegate in the higher scope that we can (The module class), in that way
            // the instance won't be deleted once the function body is executed.
            self.autocompleteFetcherDelegate = AutocompleteFetcherDelegate(modulePromise: promise)
            
            
            let filter = serializeAutocompleteFilter(originalFiler: originalFilter)
            let fetcher = GMSAutocompleteFetcher(filter: filter)
            
            fetcher.delegate = self.autocompleteFetcherDelegate
            
            fetcher.provide(sessionToken)
            fetcher.sourceTextHasChanged(inputText)
        }.runOnQueue(DispatchQueue.main)
        
        AsyncFunction("fetchPlaceWithSession") { (placeID: String, originalPlaceFields: [String]?, promise: Promise) in
            let placeFields = (originalPlaceFields != nil) ? serializePlaceFields(originalFields: originalPlaceFields!) : GMSPlaceField(rawValue: GMSPlaceField.all.rawValue)
            
            
            GMSPlacesClient.shared().fetchPlace(fromPlaceID: placeID, placeFields: placeFields, sessionToken: sessionToken) { place, error in
                // Once we use the session token to fetch a place, we must update it since the session has finished.
                self.sessionToken = GMSAutocompleteSessionToken.init()
                
                if let error = error {
                    promise.reject(error)
                    return
                }
                
                if let place = place {
                    promise.resolve(getPlaceDictionary(place: place))
                }
            }
            
        }.runOnQueue(DispatchQueue.main)
    }
}
