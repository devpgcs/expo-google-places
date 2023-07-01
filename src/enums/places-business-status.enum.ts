/**
 * The business status of a place.
 */
export enum PlacesBusinessStatus {
  /**
   * The business status is not known.
   *
   * @platform iOS
   */
  UNKNOWN,
  /** The business is operational. */
  OPERATIONAL,
  /** The business is closed temporarily. */
  CLOSED_TEMPORARILY,
  /** The business is closed permanently. */
  CLOSED_PERMANENTLY,
}
