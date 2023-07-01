import { Attributions } from "./attributions.interface";

/**
 * The metadata corresponding to a single photo associated with a place.
 */
export interface PhotoMetadata {
  /**
   * The attributions for this photo.
   */
  attributions: Attributions;
  /**
   * The maximum height in which the photo is available.
   */
  height: number;
  /**
   * The maximum width in which the photo is available.
   */
  width: number;
}
