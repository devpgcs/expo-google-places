import ExpoGooglePlacesModule from "./ExpoGooglePlacesModule";

import { AutocompleteFilter } from "./interfaces/autocomplete-filter.interface";
import { AutocompletePrediction } from "./interfaces/autocomplete-prediction.interface";
import { BooleanPlaceAttribute } from "./enums/boolean-place-attribute.enum";
import { LatLng } from "./interfaces/lat-lng.interface";
import { LocationBounds } from "./interfaces/location-bounds.interface";
import { Place } from "./interfaces/place.interface";
import { PlacesBusinessStatus } from "./enums/places-business-status.enum";
import { PlacesPriceLevel } from "./enums/places-price-level.enum";
import { PlaceTypesTableOne } from "./types/place-types-table-one.type";
import { PlaceTypesTableThree } from "./types/place-types-table-three.type";
import { PlaceTypesTableTwo } from "./types/place-types-table-two.type";

/**
 * Fetches place predictions asynchronously using the session-based approach and returns a list of predictions, with up to five autocomplete predictions.
 *
 * @param inputText The address (completed or not) typed by the user.
 * @param filter The filter to apply which helps to constrain the results to a specific area or type of place.
 * @returns A list of predictions, with up to five autocomplete predictions.
 */
export const fetchPredictionsWithSession = async (
  inputText: string,
  filter?: AutocompleteFilter
): Promise<AutocompletePrediction[]> => {
  return await ExpoGooglePlacesModule.fetchPredictionsWithSession(inputText, filter);
};

/**
 * Fetches place details asynchronously using the session-based approach.
 *
 * @param placeID The place ID of the place to fetch details for.
 * @param placeFields The fields specifying the types of place data to return.
 * @returns The place details.
 */
export const fetchPlaceWithSession = async (placeID: string, placeFields?: (keyof Place)[]): Promise<Place> => {
  return await ExpoGooglePlacesModule.fetchPlaceWithSession(placeID, placeFields);
};

export {
  AutocompleteFilter,
  AutocompletePrediction,
  BooleanPlaceAttribute,
  LatLng,
  LocationBounds,
  Place,
  PlacesBusinessStatus,
  PlacesPriceLevel,
  PlaceTypesTableOne,
  PlaceTypesTableThree,
  PlaceTypesTableTwo,
};
