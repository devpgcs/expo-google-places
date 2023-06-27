/**
 * Describes whether a place’s boolean attribute is available or not.
 */
export enum BooleanPlaceAttribute {
  /** The place's attribute has not been requested yet, or not known. */
  UNKNOWN,
  /** The place’s attribute is available. */
  TRUE,
  /** The place’s attribute is not available. */
  FALSE,
}
