import ExpoModulesCore

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
