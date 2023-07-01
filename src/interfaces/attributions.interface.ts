/**
 * The data provider attribution string for a photo which may contain hyperlinks to the website of each provider.
 *
 * In general, these must be shown to the user if data from the `PhotoMetadata` is shown, as described in the Places SDK Terms of Service.
 */
export interface Attributions {
  /**
   * The name of the organization or person that provided the photo.
   */
  name: string;
  /**
   * The URL of the organization or person that provided the photo.
   */
  url: string;
}
