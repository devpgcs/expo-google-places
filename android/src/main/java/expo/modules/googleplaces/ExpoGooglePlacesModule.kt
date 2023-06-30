package expo.modules.googleplaces

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import android.content.pm.PackageManager
import android.util.Log
import com.google.android.libraries.places.api.Places




class ExpoGooglePlacesModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ExpoGooglePlaces")

    OnCreate {
      val packageName = appContext?.reactContext?.packageName.toString()
      val applicationInfo = appContext?.reactContext?.packageManager?.getApplicationInfo(packageName, PackageManager.GET_META_DATA)
      val placesApiKey = applicationInfo?.metaData?.getString("com.google.android.geo.API_KEY")

      Places.initialize(appContext.reactContext, placesApiKey)

      if (Places.isInitialized()) {
        Log.d("ExpoGooglePlaces", "The com.google.android.geo.API_KEY was provided successfully. PlacesClient initialized")
      }
    }
  }
}
