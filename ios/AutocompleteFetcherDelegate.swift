import ExpoModulesCore
import GooglePlaces

internal class AutocompleteFetcherDelegate: NSObject, GMSAutocompleteFetcherDelegate {
    private let modulePromise: Promise
    
    init(modulePromise: Promise) {
        self.modulePromise = modulePromise
    }
    
    func didAutocomplete(with predictions: [GMSAutocompletePrediction]) {
        modulePromise.resolve(predictions.map { prediction in
            [
                "fullText": prediction.attributedFullText.string,
                "primaryText": prediction.attributedPrimaryText.string,
                "placeID": prediction.placeID,
                "types": prediction.types,
                "distanceMeters": prediction.distanceMeters as Any,
                "secondaryText": prediction.attributedSecondaryText?.string as Any
            ]
        })
    }
    
    func didFailAutocompleteWithError(_ error: Error) {
        modulePromise.reject("[ExpoGooglePlaces] Error", error.localizedDescription)
    }
}
