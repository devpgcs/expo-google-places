import ExpoModulesCore
import GooglePlaces

internal struct LatLng: Record {
    @Field
    var latitude: Double
    @Field
    var longitude: Double
}

internal struct LocationBoundsFilter: Record {
    @Field
    var northEastBounds: LatLng;
    @Field
    var southWestBounds: LatLng;
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

internal func hexStringFromColor(color: UIColor) -> String {
    let components = color.cgColor.components
    let red = Int((components?[0] ?? 0.0) * 255)
    let green = Int((components?[1] ?? 0.0) * 255)
    let blue = Int((components?[2] ?? 0.0) * 255)
    let alpha: CGFloat = (components?[3] ?? 0.0) * 255

    return "rgba(\(red), \(green), \(blue), \(alpha/255))"
 }

internal func getPlaceDictionary(place: GMSPlace) -> [String: Any?] {
    var placeDictionary: [String: Any?] = [:]
    
    if let addressComponents = place.addressComponents {
        placeDictionary["addressComponents"] = addressComponents.map { addressComponent in
            [
                "types": addressComponent.types,
                "name": addressComponent.name,
                "shortName": addressComponent.shortName
            ] as [String : Any?]
        }
    }
    
    if let businessStatus = place.businessStatus as GMSPlacesBusinessStatus? {
        placeDictionary["businessStatus"] = businessStatus.rawValue
    }
    
    if let coordinate = place.coordinate as CLLocationCoordinate2D? {
        placeDictionary["coordinate"] = [
            "latitude": coordinate.latitude,
            "longitude": coordinate.longitude
        ]
    }
    
    if let curbsidePickup = place.curbsidePickup as GMSBooleanPlaceAttribute? {
        placeDictionary["curbsidePickup"] = curbsidePickup.rawValue
    }

    if let delivery = place.delivery as GMSBooleanPlaceAttribute? {
        placeDictionary["delivery"] = delivery.rawValue
    }
    
    if let dineIn = place.dineIn as GMSBooleanPlaceAttribute? {
        placeDictionary["dineIn"] = dineIn.rawValue
    }
    
    if let formattedAddress = place.formattedAddress {
        placeDictionary["formattedAddress"] = formattedAddress
    }
    
    if let iconBackgroundColor = place.iconBackgroundColor {
        placeDictionary["iconBackgroundColor"] = hexStringFromColor(color: iconBackgroundColor)
    }
    
    if let iconImageURL = place.iconImageURL {
        placeDictionary["iconImageURL"] = iconImageURL.absoluteString
    }
    
    if let name = place.name {
        placeDictionary["name"] = name
    }
    
    if let openingHours = place.openingHours {
        var openingHoursDictionary: [String: Any?] = [:]
        
        if let periods = openingHours.periods {
            openingHoursDictionary["periods"] = periods.map { period in
                var periodDictionary: [String: Any?] = [
                    "openEvent": [
                        "day": period.openEvent.day.rawValue,
                        "time": [
                            "hour": period.openEvent.time.hour,
                            "minute": period.openEvent.time.minute
                        ]
                    ] as [String : Any]
                ]
                
                if let closeEvent = period.closeEvent {
                    periodDictionary["closeEvent"] = [
                        "day": closeEvent.day.rawValue,
                        "time": [
                            "hour": closeEvent.time.hour,
                            "minute": closeEvent.time.minute
                        ]
                    ] as [String : Any]
                }
                
                return periodDictionary
            }
        }
        
        if let weekdayText = openingHours.weekdayText {
            openingHoursDictionary["weekdayText"] = openingHours.weekdayText
        }
        
        placeDictionary["openingHours"] = openingHoursDictionary
    }
    
    if let phoneNumber = place.phoneNumber {
        placeDictionary["phoneNumber"] = phoneNumber
    }
    
    if let photos = place.photos {
        placeDictionary["photos"] = photos.map { (photo: GMSPlacePhotoMetadata) in
            var photoDictionary: [String: Any?] = [
                "height": photo.maxSize.height,
                "width": photo.maxSize.width,
            ]

            if let attributions = photo.attributions {
                var attributionsDictionary: [String: Any?] = [:]
                                
                if let attributionsUrl = attributions.attribute(NSAttributedString.Key(rawValue: "NSLink"), at: 0, effectiveRange: nil) {
                    attributionsDictionary["url"] = (attributionsUrl as! NSURL).absoluteString
                }
                
                if let attributionsName = attributions.string as String? {
                    attributionsDictionary["name"] = attributionsName
                }
                
                photoDictionary["attributions"] = attributionsDictionary
            }
            
            return photoDictionary
        }
    }
    
    if let placeID = place.placeID {
        placeDictionary["placeID"] = placeID
    }
    
    if let plusCode = place.plusCode {
        placeDictionary["plusCode"] = [
            "globalCode": plusCode.globalCode,
            "compoundCode": plusCode.compoundCode
        ]
    }
    
    if let priceLevel = place.priceLevel as GMSPlacesPriceLevel? {
        placeDictionary["priceLevel"] = priceLevel.rawValue
    }
    
    if let rating = place.rating as Float? {
        placeDictionary["rating"] = rating
    }
    
    if let reservable = place.reservable as GMSBooleanPlaceAttribute? {
        placeDictionary["reservable"] = reservable.rawValue
    }
    
    if let servesBeer = place.servesBeer as GMSBooleanPlaceAttribute? {
        placeDictionary["servesBeer"] = servesBeer.rawValue
    }
    
    if let servesBreakfast = place.servesBreakfast as GMSBooleanPlaceAttribute? {
        placeDictionary["servesBreakfast"] = servesBreakfast.rawValue
    }
    
    if let servesBrunch = place.servesBrunch as GMSBooleanPlaceAttribute? {
        placeDictionary["servesBrunch"] = servesBrunch.rawValue
    }
    
    if let servesDinner = place.servesDinner as GMSBooleanPlaceAttribute? {
        placeDictionary["servesDinner"] = servesDinner.rawValue
    }
    
    if let servesLunch = place.servesLunch as GMSBooleanPlaceAttribute? {
        placeDictionary["servesLunch"] = servesLunch.rawValue
    }
    
    if let servesVegetarianFood = place.servesVegetarianFood as GMSBooleanPlaceAttribute? {
        placeDictionary["servesVegetarianFood"] = servesVegetarianFood.rawValue
    }
    
    if let servesWine = place.servesWine as GMSBooleanPlaceAttribute? {
        placeDictionary["servesWine"] = servesWine.rawValue
    }
    
    if let takeout = place.takeout as GMSBooleanPlaceAttribute? {
        placeDictionary["takeout"] = takeout.rawValue
    }
    
    if let types = place.types {
        placeDictionary["types"] = types
    }
    
    if let userRatingsTotal = place.userRatingsTotal as UInt? {
        placeDictionary["userRatingsTotal"] = userRatingsTotal
    }
    
    if let utcOffsetMinutes = place.utcOffsetMinutes {
        placeDictionary["utcOffsetMinutes"] = utcOffsetMinutes
    }
    
    if let viewportInfo = place.viewportInfo {
        placeDictionary["viewportInfo"] = [
            "northEastBounds": [
                "latitude": viewportInfo.northEast.latitude,
                "longitude": viewportInfo.northEast.longitude
            ],
            "southWestBounds": [
                "latitude": viewportInfo.southWest.latitude,
                "longitude": viewportInfo.southWest.longitude
            ],
        ]
    }
    
    if let website = place.website {
        placeDictionary["website"] = website.absoluteString
    }
    
    if let wheelchairAccessibleEntrance = place.wheelchairAccessibleEntrance as GMSBooleanPlaceAttribute? {
        placeDictionary["wheelchairAccessibleEntrance"] = wheelchairAccessibleEntrance.rawValue
    }
    
    return placeDictionary
}
