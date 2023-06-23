import { PlaceTypesTableOne } from "../types/place-types-table-one.type";
import { PlaceTypesTableThree } from "../types/place-types-table-three.type";
import { PlaceTypesTableTwo } from "../types/place-types-table-two.type";
import { LatLng } from "./lat-lng.interface";

/**
 * This allows customization of autocomplete suggestions to only those places that are of interest.
 *
 * If you need, check the full [documentation](https://developers.google.com/maps/documentation/places/ios-sdk/reference/interface_g_m_s_autocomplete_filter) for iOS reference
 *
 */
export interface AutocompleteFilter {
  /**
   * The filter applied to an autocomplete request to restrict results using up to 5 different place types.
   */
  types?: PlaceTypesTableOne[] | PlaceTypesTableTwo[] | PlaceTypesTableThree[];
  /**
   * The countries to restrict results to.
   */
  countries?: string[];
  /**
   * The straight line distance origin location for measuring the straight line distance between the origin location and autocomplete predictions.
   */
  origin?: LatLng;
  /**
   * The optional location bias to prefer place results near the location.
   */
  locationBias?: {
    northEastBounds: LatLng;
    southWestBounds: LatLng;
  };
  /**
   * The optional location restriction to limit the place results to.
   */
  locationRestriction?: {
    northEastBounds: LatLng;
    southWestBounds: LatLng;
  };
}
