package expo.modules.googleplaces

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import android.content.pm.PackageManager
import android.util.Log
import com.google.android.libraries.places.api.Places
import com.google.android.libraries.places.api.model.AutocompleteSessionToken
import com.google.android.libraries.places.api.model.Place
import com.google.android.libraries.places.api.net.FetchPlaceRequest
import com.google.android.libraries.places.api.net.FetchPlaceResponse
import com.google.android.libraries.places.api.net.FindAutocompletePredictionsResponse
import com.google.android.libraries.places.api.net.PlacesClient
import expo.modules.kotlin.Promise
import expo.modules.kotlin.exception.CodedException

class ExpoGooglePlacesModule : Module() {
  private var sessionToken = AutocompleteSessionToken.newInstance()
  private lateinit var placesClient: PlacesClient

  override fun definition() = ModuleDefinition {
    Name("ExpoGooglePlaces")

    OnCreate {
      val packageName = appContext?.reactContext?.packageName.toString()
      val applicationInfo = appContext?.reactContext?.packageManager?.getApplicationInfo(packageName, PackageManager.GET_META_DATA)
      val placesApiKey = applicationInfo?.metaData?.getString("com.google.android.geo.API_KEY")

      Places.initialize(appContext.reactContext, placesApiKey)

      if (Places.isInitialized()) {
        placesClient = Places.createClient(appContext.reactContext)
        Log.d("ExpoGooglePlaces", "The com.google.android.geo.API_KEY was provided successfully. PlacesClient initialized")
      }
    }

    AsyncFunction("fetchPredictionsWithSession") { inputText: String, originalFilter: AutocompleteFilter?, promise: Promise ->
      val request = serializeAutocompleteFilter(originalFilter)
        .setSessionToken(sessionToken)
        .setQuery(inputText)
        .build()

      placesClient.findAutocompletePredictions(request)
        .addOnSuccessListener { response: FindAutocompletePredictionsResponse ->
          promise.resolve(
            response.autocompletePredictions.map {
              mapOf(
                "fullText" to it.getFullText(null).toString(),
                "primaryText" to it.getPrimaryText(null).toString(),
                "placeID" to it.placeId,
                "types" to it.placeTypes.map { it -> it.name.lowercase() },
                "distanceMeters" to it.distanceMeters,
                "secondaryText" to it.getSecondaryText(null).toString()
              )
            }
          )
        }.addOnFailureListener { exception: Exception? ->
            promise.reject(CodedException(exception?.localizedMessage ?: "Unknown"))
        }
    }

    AsyncFunction("fetchPlaceWithSession") { placeId: String, originalPlaceFields: List<String>?, promise: Promise ->
      val requestFields = serializePlaceFields(originalPlaceFields)
      val request = FetchPlaceRequest.builder(placeId, requestFields)
        .setSessionToken(sessionToken)
        .build()

      placesClient.fetchPlace(request)
        .addOnSuccessListener { response: FetchPlaceResponse ->
          // Once we use the session token to fetch a place, we must update it since the session has finished.
          sessionToken = AutocompleteSessionToken.newInstance()

          promise.resolve(getPlaceMap(response.place))
        }.addOnFailureListener { exception: Exception ->
          promise.reject(CodedException(exception.localizedMessage ?: "Unknown"))
        }
    }
  }
}
