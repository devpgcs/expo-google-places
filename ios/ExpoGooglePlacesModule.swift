import GooglePlaces
import ExpoModulesCore

public class ExpoGooglePlacesModule: Module {
    private var sessionToken = GMSAutocompleteSessionToken.init()
    private var autocompleteFetcherDelegate: AutocompleteFetcherDelegate?
        
    public func definition() -> ModuleDefinition {
        Name("ExpoGooglePlaces")
        
        AsyncFunction("fetchWithSession") { (inputText: String, originalFilter: AutocompleteFilter?, promise: Promise) in
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
    }
    
    private func serializeAutocompleteFilter(originalFiler: AutocompleteFilter?) -> GMSAutocompleteFilter? {
        if let originalFiler = originalFiler {
            let serializedFilter = GMSAutocompleteFilter()
            
            if let types = originalFiler.types {
                serializedFilter.types = types
            }
            
            if let countries = originalFiler.countries {
                serializedFilter.countries = countries
            }
            
            if let origin = originalFiler.origin {
                serializedFilter.origin = CLLocation(latitude: origin.latitude, longitude: origin.longitude)
            }
            
            if let locationBias = originalFiler.locationBias {
                let northEastBounds = CLLocationCoordinate2DMake(locationBias.northEastBounds.latitude, locationBias.northEastBounds.longitude)
                let southWestBounds = CLLocationCoordinate2DMake(locationBias.southWestBounds.latitude, locationBias.southWestBounds.longitude)
                
                serializedFilter.locationBias = GMSPlaceRectangularLocationOption(northEastBounds, southWestBounds)
            }
            
            if let locationRestriction = originalFiler.locationRestriction {
                let northEastBounds = CLLocationCoordinate2DMake(locationRestriction.northEastBounds.latitude, locationRestriction.northEastBounds.longitude)
                let southWestBounds = CLLocationCoordinate2DMake(locationRestriction.southWestBounds.latitude, locationRestriction.southWestBounds.longitude)
                
                serializedFilter.locationRestriction = GMSPlaceRectangularLocationOption(northEastBounds, southWestBounds)
            }
            
            return serializedFilter
        } else {
            return nil
        }
    }
}
