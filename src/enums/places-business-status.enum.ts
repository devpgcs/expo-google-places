/**
 * The business status of a place.
 *
 * @todo Define the final values for it when working on Android features. Try to make it consistent for both platforms.
 */
export enum PlacesBusinessStatus {
  /**
   * The business status is not known.
   *
   * @platform iOS
   */
  UNKNOWN = -1,
  /** The business is operational. */
  OPERATIONAL = 0,
  /** The business is closed temporarily. */
  CLOSED_TEMPORARILY = 1,
  /** The business is closed permanently. */
  CLOSED_PERMANENTLY = 2,
}
