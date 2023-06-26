import ExpoModulesCore
import GooglePlaces

internal struct LatLng {
    let latitude: Double
    let longitude: Double
}

internal struct LocationBoundsFilter {
    let northEastBounds: LatLng;
    let southWestBounds: LatLng;
}

internal struct AutocompleteFilter: Record {
    @Field
    var types: [String]?
    @Field
    var countries: [String]?
    @Field
    var origin: LatLng?
    @Field
    var locationBias: LocationBoundsFilter?
    @Field
    var locationRestriction: LocationBoundsFilter?
}

internal func serializeAutocompleteFilter(originalFiler: AutocompleteFilter?) -> GMSAutocompleteFilter? {
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

internal func serializePlaceFields(originalFields: [String]) -> GMSPlaceField.ArrayLiteralElement {
    var serializedPlaceFields: GMSPlaceField.ArrayLiteralElement = []
    
    for originalPlaceField in originalFields {
        switch originalPlaceField {
        case "addressComponents":
            serializedPlaceFields.insert(GMSPlaceField.addressComponents)
        case "businessStatus":
            serializedPlaceFields.insert(GMSPlaceField.businessStatus)
        case "coordinate":
            serializedPlaceFields.insert(GMSPlaceField.coordinate)
        case "curbsidePickup":
            serializedPlaceFields.insert(GMSPlaceField.curbsidePickup)
        case "delivery":
            serializedPlaceFields.insert(GMSPlaceField.delivery)
        case "dineIn":
            serializedPlaceFields.insert(GMSPlaceField.dineIn)
        case "formattedAddress":
            serializedPlaceFields.insert(GMSPlaceField.formattedAddress)
        case "iconBackgroundColor":
            serializedPlaceFields.insert(GMSPlaceField.iconBackgroundColor)
        case "iconImageURL":
            serializedPlaceFields.insert(GMSPlaceField.iconImageURL)
        case "name":
            serializedPlaceFields.insert(GMSPlaceField.name)
        case "openingHours":
            serializedPlaceFields.insert(GMSPlaceField.openingHours)
        case "phoneNumber":
            serializedPlaceFields.insert(GMSPlaceField.phoneNumber)
        case "photos":
            serializedPlaceFields.insert(GMSPlaceField.photos)
        case "placeID":
            serializedPlaceFields.insert(GMSPlaceField.placeID)
        case "plusCode":
            serializedPlaceFields.insert(GMSPlaceField.plusCode)
        case "priceLevel":
            serializedPlaceFields.insert(GMSPlaceField.priceLevel)
        case "rating":
            serializedPlaceFields.insert(GMSPlaceField.rating)
        case "reservable":
            serializedPlaceFields.insert(GMSPlaceField.reservable)
        case "servesBeer":
            serializedPlaceFields.insert(GMSPlaceField.servesBeer)
        case "servesBreakfast":
            serializedPlaceFields.insert(GMSPlaceField.servesBreakfast)
        case "servesBrunch":
            serializedPlaceFields.insert(GMSPlaceField.servesBrunch)
        case "servesDinner":
            serializedPlaceFields.insert(GMSPlaceField.servesDinner)
        case "servesLunch":
            serializedPlaceFields.insert(GMSPlaceField.servesLunch)
        case "servesVegetarianFood":
            serializedPlaceFields.insert(GMSPlaceField.servesVegetarianFood)
        case "servesWine":
            serializedPlaceFields.insert(GMSPlaceField.servesWine)
        case "takeout":
            serializedPlaceFields.insert(GMSPlaceField.takeout)
        case "types":
            serializedPlaceFields.insert(GMSPlaceField.types)
        case "userRatingsTotal":
            serializedPlaceFields.insert(GMSPlaceField.userRatingsTotal)
        case "utcOffsetMinutes":
            serializedPlaceFields.insert(GMSPlaceField.utcOffsetMinutes)
        case "viewport":
            serializedPlaceFields.insert(GMSPlaceField.viewport)
        case "website":
            serializedPlaceFields.insert(GMSPlaceField.website)
        case "wheelchairAccessibleEntrance":
            serializedPlaceFields.insert(GMSPlaceField.wheelchairAccessibleEntrance)
        default:
            continue
        }
    }
    
    return serializedPlaceFields
}

internal func getPlaceDictionary(place: GMSPlace) -> [String: Any] {
    return [
        "addressComponents": place.addressComponents?.map { addressComponent in
            [
                "types": addressComponent.types,
                "name": addressComponent.name,
                "shortName": addressComponent.shortName as Any
            ]
        } as Any,
        "businessStatus": place.businessStatus.rawValue,
        "coordinate": [
            "latitude": place.coordinate.latitude,
            "longitude": place.coordinate.longitude
        ],
        "curbsidePickup": place.curbsidePickup.rawValue,
        "delivery": place.delivery.rawValue,
        "dineIn": place.dineIn.rawValue,
        "formattedAddress": place.formattedAddress as Any,
        "iconBackgroundColor": place.iconBackgroundColor?.description as Any,
        "iconImageURL": place.iconImageURL?.absoluteString as Any,
        "name": place.name as Any,
        "openingHours": [
            "weekdayText": place.openingHours?.weekdayText as Any,
            "periods": place.openingHours?.periods?.map { period in
                [
                    "openEvent": [
                        "day": period.openEvent.day.rawValue,
                        "time": [
                            "hour": period.openEvent.time.hour,
                            "minute": period.openEvent.time.minute
                        ]
                    ],
                    "closeEvent": [
                        "day": period.closeEvent?.day.rawValue as Any,
                        "time": [
                            "hour": period.closeEvent?.time.hour,
                            "minute": period.closeEvent?.time.minute
                        ]
                    ]
                ]
            } as Any
        ],
        "phoneNumber": place.phoneNumber as Any,
        "photos": place.photos?.map { photo in
            [
                "attributions": photo.attributions?.string as Any,
                "maxSize": [
                    "width": photo.maxSize.width,
                    "height": photo.maxSize.height
                ]
            ]
        } as Any,
        "placeID": place.placeID as Any,
        "plusCode": [
            "globalCode": place.plusCode?.globalCode,
            "compoundCode": place.plusCode?.compoundCode
        ],
        "priceLevel": place.priceLevel.rawValue,
        "rating": place.rating,
        "reservable": place.reservable.rawValue,
        "servesBeer": place.servesBeer.rawValue,
        "servesBreakfast": place.servesBreakfast.rawValue,
        "servesBrunch": place.servesBrunch.rawValue,
        "servesDinner": place.servesDinner.rawValue,
        "servesLunch": place.servesLunch.rawValue,
        "servesVegetarianFood": place.servesVegetarianFood.rawValue,
        "servesWine": place.servesWine.rawValue,
        "takeout": place.takeout.rawValue,
        "types": place.types as Any,
        "userRatingsTotal": place.userRatingsTotal,
        "utcOffsetMinutes": place.utcOffsetMinutes as Any,
        "viewportInfo": [
            "northEast": [
                "latitude": place.viewportInfo?.northEast.latitude,
                "longitude": place.viewportInfo?.northEast.longitude
            ],
            "southWest": [
                "latitude": place.viewportInfo?.southWest.latitude,
                "longitude": place.viewportInfo?.southWest.longitude
            ],
        ],
        "website": place.website?.absoluteString as Any,
        "wheelchairAccessibleEntrance": place.wheelchairAccessibleEntrance.rawValue,
    ]
}
