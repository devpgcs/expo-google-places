/**
 * The metadata corresponding to a single photo associated with a place.
 */
export interface PhotoMetadata {
  /**
   * The attributions in HTML format, or an empty String if there are none.
   */
  attributions: string;
  /**
   * The maximum height in which the photo is available.
   */
  height: number;
  /**
   * The maximum width in which the photo is available.
   */
  width: number;
}
