import ExpoGooglePlacesModule from "./ExpoGooglePlacesModule";

// Enums
import { BooleanPlaceAttribute } from "./enums/boolean-place-attribute.enum";
import { DayOfWeek } from "./enums/day-of-week.enum";
import { HoursType } from "./enums/hours-type.enum";
import { PlacesBusinessStatus } from "./enums/places-business-status.enum";
import { PlacesPriceLevel } from "./enums/places-price-level.enum";

// Interfaces
import { AddressComponent } from "./interfaces/address-component.interface";
import { Attributions } from "./interfaces/attributions.interface";
import { AutocompleteFilter } from "./interfaces/autocomplete-filter.interface";
import { AutocompletePrediction } from "./interfaces/autocomplete-prediction.interface";
import { LatLng } from "./interfaces/lat-lng.interface";
import { LocalTime } from "./interfaces/local-time.interface";
import { LocationBounds } from "./interfaces/location-bounds.interface";
import { OpeningHours } from "./interfaces/opening-hours.interface";
import { Period } from "./interfaces/period.interface";
import { PhotoMetadata } from "./interfaces/photo-metadata.interface";
import { Place } from "./interfaces/place.interface";
import { PlusCode } from "./interfaces/plus-code.interface";
import { SpecialDay } from "./interfaces/special-day.interface";
import { TimeOfWeek } from "./interfaces/time-of-week.interface";

// Types
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
  filter?: Partial<AutocompleteFilter>
): Promise<AutocompletePrediction[]> => {
  return await ExpoGooglePlacesModule.fetchPredictionsWithSession(inputText, filter);
};

/**
 * Fetches place details asynchronously using the session-based approach and returns a place object.
 *
 * @param placeID The place ID of the place to fetch details for.
 * @param placeFields The fields specifying the types of place data to return.
 * @returns The place details.
 */
export const fetchPlaceWithSession = async <PlaceFields extends (keyof Place)[]>(
  placeID: string,
  placeFields?: PlaceFields
): Promise<Pick<Place, PlaceFields[number]>> => {
  const place = await ExpoGooglePlacesModule.fetchPlaceWithSession(placeID, placeFields);

  // There are some enum values which return an undesired default value when the place fields is provided. So, we need to filter them out.
  if (placeFields) {
    return placeFields.reduce((finalPlace, field) => {
      finalPlace[field] = place[field];

      return finalPlace;
    }, {} as Pick<Place, PlaceFields[number]>);
  }

  return place;
};

export {
  AddressComponent,
  Attributions,
  AutocompleteFilter,
  AutocompletePrediction,
  BooleanPlaceAttribute,
  DayOfWeek,
  HoursType,
  LatLng,
  LocalTime,
  LocationBounds,
  OpeningHours,
  Period,
  PhotoMetadata,
  Place,
  PlacesBusinessStatus,
  PlacesPriceLevel,
  PlaceTypesTableOne,
  PlaceTypesTableThree,
  PlaceTypesTableTwo,
  PlusCode,
  SpecialDay,
  TimeOfWeek,
};

export * from "./constants";
