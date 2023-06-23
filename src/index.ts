import ExpoGooglePlacesModule from "./ExpoGooglePlacesModule";

import { AutocompleteFilter } from "./interfaces/autocomplete-filter.interface";
import { AutocompletePrediction } from "./interfaces/autocomplete-prediction.interface";
import { LatLng } from "./interfaces/lat-lng.interface";
import { PlaceTypesTableOne } from "./types/place-types-table-one.type";
import { PlaceTypesTableThree } from "./types/place-types-table-three.type";
import { PlaceTypesTableTwo } from "./types/place-types-table-two.type";

export const fetchWithSession = async (
  inputText: string,
  filter?: AutocompleteFilter
): Promise<AutocompletePrediction[]> => {
  return await ExpoGooglePlacesModule.fetchWithSession(inputText, filter);
};

export {
  AutocompleteFilter,
  AutocompletePrediction,
  LatLng,
  PlaceTypesTableOne,
  PlaceTypesTableThree,
  PlaceTypesTableTwo,
};
