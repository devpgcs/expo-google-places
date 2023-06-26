import { PlaceTypesTableOne } from "../types/place-types-table-one.type";
import { PlaceTypesTableThree } from "../types/place-types-table-three.type";
import { PlaceTypesTableTwo } from "../types/place-types-table-two.type";
import { LatLng } from "./lat-lng.interface";
import { LocationBounds } from "./location-bounds.interface";

/**
 * Represents a filter to apply to an autocomplete request. This allows customization of autocomplete suggestions to only those places that are of interest.
 */
export interface AutocompleteFilter {
  /**
   * The countries to restrict results to.
   */
  countries?: string[];
  /**
   * The optional location bias to prefer place results near the location.
   */
  locationBias?: LocationBounds;
  /**
   * The optional location restriction to limit the place results to.
   */
  locationRestriction?: LocationBounds;
  /**
   * The straight line distance origin location for measuring the straight line distance between the origin location and autocomplete predictions.
   */
  origin?: LatLng;
  /**
   * The filter applied to an autocomplete request to restrict results using up to 5 different place types.
   */
  types?: PlaceTypesTableOne[] | PlaceTypesTableTwo[] | PlaceTypesTableThree[];
}
