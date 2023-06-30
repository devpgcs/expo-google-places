/**
 * The business status of a place.
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
