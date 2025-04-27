package expo.modules.googleplaces

import androidx.core.graphics.alpha
import androidx.core.graphics.blue
import androidx.core.graphics.green
import androidx.core.graphics.red
import com.google.android.gms.maps.model.LatLng
import com.google.android.libraries.places.api.model.DayOfWeek
import com.google.android.libraries.places.api.model.OpeningHours
import com.google.android.libraries.places.api.model.Place
import com.google.android.libraries.places.api.model.RectangularBounds
import com.google.android.libraries.places.api.model.TimeOfWeek
import com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest
import expo.modules.kotlin.records.Field
import expo.modules.kotlin.records.Record

internal class JSONLatLng: Record {
    @Field
    var latitude: Double = 0.0
    @Field
    var longitude: Double = 0.0
}

internal class LocationBoundsFilter: Record {
    @Field
    lateinit var northEastBounds: JSONLatLng
    @Field
    lateinit var southWestBounds: JSONLatLng
}

internal class AutocompleteFilter: Record {
    @Field
    var types: List<String>? = null
    @Field
    var countries: List<String>? = null
    @Field
    var origin: JSONLatLng? = null
    @Field
    var locationBias: LocationBoundsFilter? = null
    @Field
    var locationRestriction: LocationBoundsFilter? = null
}

internal fun serializeAutocompleteFilter(originalFiler: AutocompleteFilter?): FindAutocompletePredictionsRequest.Builder {
    val request = FindAutocompletePredictionsRequest.builder()

    if (originalFiler != null) {

        if (!originalFiler.types.isNullOrEmpty()) {
            request.typesFilter = originalFiler.types!!
        }

        if (!originalFiler.countries.isNullOrEmpty()) {
            request.countries = originalFiler.countries!!
        }

        if (originalFiler.origin != null) {
            request.origin = LatLng(
                originalFiler.origin!!.latitude,
                originalFiler.origin!!.longitude
            )
        }

        if (originalFiler.locationBias != null) {
            val southWestBounds = originalFiler.locationBias!!.southWestBounds
            val northEastBounds = originalFiler.locationBias!!.northEastBounds

            request.locationBias = RectangularBounds.newInstance(
                LatLng(southWestBounds.latitude, southWestBounds.longitude),
                LatLng(northEastBounds.latitude, northEastBounds.longitude),
            )
        }

        if (originalFiler.locationRestriction != null) {
            val southWestBounds = originalFiler.locationRestriction!!.southWestBounds
            val northEastBounds = originalFiler.locationRestriction!!.northEastBounds

            request.locationRestriction = RectangularBounds.newInstance(
                LatLng(southWestBounds.latitude, southWestBounds.longitude),
                LatLng(northEastBounds.latitude, northEastBounds.longitude),
            )
        }
    }

    return request
}

internal fun serializePlaceFields(originalFields: List<String>?): List<Place.Field> {
    val serializedPlaceFields: MutableList<Place.Field> = mutableListOf()

    if (originalFields.isNullOrEmpty()) {
        return Place.Field.values().toList()
    }

    for (originalPlaceField in originalFields) {
        when (originalPlaceField) {
            "addressComponents" -> serializedPlaceFields.add(Place.Field.ADDRESS_COMPONENTS)
            "businessStatus" -> serializedPlaceFields.add(Place.Field.BUSINESS_STATUS)
            "coordinate" -> serializedPlaceFields.add(Place.Field.LAT_LNG)
            "curbsidePickup" -> serializedPlaceFields.add(Place.Field.CURBSIDE_PICKUP)
            "delivery" -> serializedPlaceFields.add(Place.Field.DELIVERY)
            "dineIn" -> serializedPlaceFields.add(Place.Field.DINE_IN)
            "formattedAddress" -> serializedPlaceFields.add(Place.Field.ADDRESS)
            "iconBackgroundColor" -> serializedPlaceFields.add(Place.Field.ICON_BACKGROUND_COLOR)
            "iconImageURL" -> serializedPlaceFields.add(Place.Field.ICON_URL)
            "name" -> serializedPlaceFields.add(Place.Field.NAME)
            "openingHours" -> serializedPlaceFields.add(Place.Field.OPENING_HOURS)
            "phoneNumber" -> serializedPlaceFields.add(Place.Field.PHONE_NUMBER)
            "photos" -> serializedPlaceFields.add(Place.Field.PHOTO_METADATAS)
            "placeID" -> serializedPlaceFields.add(Place.Field.ID)
            "plusCode" -> serializedPlaceFields.add(Place.Field.PLUS_CODE)
            "priceLevel" -> serializedPlaceFields.add(Place.Field.PRICE_LEVEL)
            "rating" -> serializedPlaceFields.add(Place.Field.RATING)
            "reservable" -> serializedPlaceFields.add(Place.Field.RESERVABLE)
            "servesBeer" -> serializedPlaceFields.add(Place.Field.SERVES_BEER)
            "servesBreakfast" -> serializedPlaceFields.add(Place.Field.SERVES_BREAKFAST)
            "servesBrunch" -> serializedPlaceFields.add(Place.Field.SERVES_BRUNCH)
            "servesDinner" -> serializedPlaceFields.add(Place.Field.SERVES_DINNER)
            "servesLunch" -> serializedPlaceFields.add(Place.Field.SERVES_LUNCH)
            "servesVegetarianFood" -> serializedPlaceFields.add(Place.Field.SERVES_VEGETARIAN_FOOD)
            "servesWine" -> serializedPlaceFields.add(Place.Field.SERVES_WINE)
            "takeout" -> serializedPlaceFields.add(Place.Field.TAKEOUT)
            "types" -> serializedPlaceFields.add(Place.Field.TYPES)
            "userRatingsTotal" -> serializedPlaceFields.add(Place.Field.USER_RATINGS_TOTAL)
            "utcOffsetMinutes" -> serializedPlaceFields.add(Place.Field.UTC_OFFSET)
            "viewport" -> serializedPlaceFields.add(Place.Field.VIEWPORT)
            "website" -> serializedPlaceFields.add(Place.Field.WEBSITE_URI)
            "wheelchairAccessibleEntrance" -> serializedPlaceFields.add(Place.Field.WHEELCHAIR_ACCESSIBLE_ENTRANCE)
        }
    }

    return serializedPlaceFields
}

internal fun getDayOfWeekToMatchWithIOS(dayOfWeek: DayOfWeek): Int {
    return when (dayOfWeek) {
        DayOfWeek.SUNDAY -> 1
        DayOfWeek.MONDAY -> 2
        DayOfWeek.TUESDAY -> 3
        DayOfWeek.WEDNESDAY -> 4
        DayOfWeek.THURSDAY -> 5
        DayOfWeek.FRIDAY -> 6
        DayOfWeek.SATURDAY -> 7
    }
}

internal fun getTimeOfWeekMap(timeOfWeek: TimeOfWeek): Map<String, Any?> {
    return mapOf(
        "day" to getDayOfWeekToMatchWithIOS(timeOfWeek.day),
        "date" to timeOfWeek.date?.toString(),
        "time" to mapOf(
            "hour" to timeOfWeek.time.hours,
            "minute" to timeOfWeek.time.minutes
        )
    )
}

internal fun getOpeningHoursMap(openingHours: OpeningHours): Map<String, Any> {
    val openingHoursMap: MutableMap<String, Any> = mutableMapOf()

    if (openingHours.periods != null) {
        openingHoursMap["periods"] = openingHours.periods.map { period ->
            val periodMap: MutableMap<String, Any> = mutableMapOf()

            if (period.close != null) {
                periodMap["closeEvent"] = getTimeOfWeekMap(period.close)
            }

            if (period.open != null) {
                periodMap["openEvent"] = getTimeOfWeekMap(period.open)
            }

            periodMap
        }
    }

    if (openingHours.hoursType != null) {
        openingHoursMap["hoursType"] = openingHours.hoursType.ordinal
    }

    if (openingHours.specialDays != null) {
        openingHoursMap["specialDays"] = openingHours.specialDays.map { specialDay ->
            mapOf(
                "date" to specialDay.date.toString(),
                "isExceptional" to specialDay.isExceptional
            )
        }
    }

    if (openingHours.weekdayText != null) {
        openingHoursMap["weekdayText"] = openingHours.weekdayText
    }

    return openingHoursMap
}

internal fun getPlaceMap(place: Place): Map<String, Any> {
    val placeMap: MutableMap<String, Any> = mutableMapOf()

    if (place.addressComponents != null) {
        placeMap["addressComponents"] = place.addressComponents.asList().map { addressComponent ->
            mapOf(
                "types" to addressComponent.types.map { it.lowercase() },
                "name" to addressComponent.name,
                "shortName" to addressComponent.shortName
            )
        }
    }

    if (place.businessStatus != null) {
        placeMap["businessStatus"] = when (place.businessStatus) {
            Place.BusinessStatus.OPERATIONAL -> 1
            Place.BusinessStatus.CLOSED_TEMPORARILY -> 2
            Place.BusinessStatus.CLOSED_PERMANENTLY -> 3
        }
    }

    if (place.latLng != null) {
        placeMap["coordinate"] = mapOf(
            "latitude" to place.latLng.latitude,
            "longitude" to place.latLng.longitude
        )
    }

    if (place.curbsidePickup != null) {
        placeMap["curbsidePickup"] = place.curbsidePickup.ordinal
    }

    if (place.delivery != null) {
        placeMap["delivery"] = place.delivery.ordinal
    }

    if (place.dineIn != null) {
        placeMap["dineIn"] = place.dineIn.ordinal
    }

    if (place.address != null) {
        placeMap["formattedAddress"] = place.address
    }

    if (place.iconBackgroundColor != null) {
        val red = place.iconBackgroundColor.red
        val green = place.iconBackgroundColor.green
        val blue = place.iconBackgroundColor.blue
        val alpha = place.iconBackgroundColor.alpha

        placeMap["iconBackgroundColor"] = "rgba($red, $green, $blue, ${alpha / 255f})"
    }

    if (place.iconUrl != null) {
        placeMap["iconImageURL"] = place.iconUrl
    }

    if (place.name != null) {
        placeMap["name"] = place.name
    }

    if (place.openingHours != null) {
        placeMap["openingHours"] = getOpeningHoursMap(place.openingHours)
    }

    if (place.id != null) {
        placeMap["placeID"] = place.id
    }

    if (place.phoneNumber != null) {
        placeMap["phoneNumber"] = place.phoneNumber
    }

    if (place.photoMetadatas != null) {
        placeMap["photos"] = place.photoMetadatas.map { photoMetadata ->
            val regexName = "\">([^<]+)</a>".toRegex()
            val regexUrl = "href=\"([^\"]+)\"".toRegex()

            val matchResultName = regexName.find(photoMetadata.attributions)
            val matchResultUrl = regexUrl.find(photoMetadata.attributions)

            val name = matchResultName?.groupValues?.get(1)
            val url = matchResultUrl?.groupValues?.get(1)

            mapOf(
                "attributions" to mapOf(
                    "name" to name,
                    "url" to url
                ),
                "height" to photoMetadata.height,
                "width" to photoMetadata.width
            )
        }
    }

    if (place.priceLevel != null) {
        placeMap["priceLevel"] = place.priceLevel
    }

    if (place.plusCode != null) {
        placeMap["plusCode"] = mapOf(
            "compoundCode" to place.plusCode.compoundCode,
            "globalCode" to place.plusCode.globalCode
        )
    }

    if (place.priceLevel != null) {
        placeMap["priceLevel"] = place.priceLevel
    }

    if (place.rating != null) {
        placeMap["rating"] = place.rating
    }

    if (place.reservable != null) {
        placeMap["reservable"] = place.reservable.ordinal
    }

    if (place.servesBeer != null) {
        placeMap["servesBeer"] = place.servesBeer.ordinal
    }

    if (place.servesBreakfast != null) {
        placeMap["servesBreakfast"] = place.servesBreakfast.ordinal
    }

    if (place.servesBrunch != null) {
        placeMap["servesBrunch"] = place.servesBrunch.ordinal
    }

    if (place.servesDinner != null) {
        placeMap["servesDinner"] = place.servesDinner.ordinal
    }

    if (place.servesLunch != null) {
        placeMap["servesLunch"] = place.servesLunch.ordinal
    }

    if (place.servesVegetarianFood != null) {
        placeMap["servesVegetarianFood"] = place.servesVegetarianFood.ordinal
    }

    if (place.servesWine != null) {
        placeMap["servesWine"] = place.servesWine.ordinal
    }

    if (place.takeout != null) {
        placeMap["takeout"] = place.takeout.ordinal
    }

    if (place.types != null) {
        placeMap["types"] = place.types.map { it.name.lowercase() }
    }

    if (place.userRatingsTotal != null) {
        placeMap["userRatingsTotal"] = place.userRatingsTotal
    }

    if (place.utcOffsetMinutes != null) {
        placeMap["utcOffsetMinutes"] = place.utcOffsetMinutes
    }

    if (place.viewport != null) {
        placeMap["viewportInfo"] = mapOf(
            "northEastBounds" to mapOf(
                "latitude" to place.viewport.northeast.latitude,
                "longitude" to place.viewport.northeast.longitude
            ),
            "southWestBounds" to mapOf(
                "latitude" to place.viewport.southwest.latitude,
                "longitude" to place.viewport.southwest.longitude
            )
        )
    }

    if (place.websiteUri != null) {
        placeMap["website"] = place.websiteUri.toString()
    }

    if (place.wheelchairAccessibleEntrance != null) {
        placeMap["wheelchairAccessibleEntrance"] = place.wheelchairAccessibleEntrance.ordinal
    }

    return placeMap
}