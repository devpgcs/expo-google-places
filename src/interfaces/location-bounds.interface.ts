import { LatLng } from "./lat-lng.interface";

/**
 * Represents a rectangular area in geographical coordinates.
 */
export interface LocationBounds {
  /**
   * The north east corner of the bounds.
   */
  northEastBounds: LatLng;
  /**
   * The south west corner of the bounds.
   */
  southWestBounds: LatLng;
}
