/**
 * If you need, check the full [documentation](https://developers.google.com/maps/documentation/places/ios-sdk/reference/interface_g_m_s_autocomplete_prediction) for iOS reference
 */
export interface AutocompletePrediction {
  /**
   * The full description of the prediction
   */
  fullText: string;
  /**
   * The main text of a prediction, usually the name of the place.
   */
  primaryText: string;
  /**
   * A property representing the place ID of the prediction, suitable for use in a place details request.
   */
  placeID: string;
  /**
   * The types of this autocomplete result.
   */
  types: string[];
  /**
   * The straight line distance in meters between the origin and this prediction if a valid origin is specified in the AutocompleteFilter of the request.
   */
  distanceMeters?: number;
  /**
   * The secondary text of a prediction, usually the location of the place.
   */
  secondaryText?: string;
}
