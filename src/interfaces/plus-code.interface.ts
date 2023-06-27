/**
 * Plus Code, or Open Location Code (OLC), is a geocode system for identifying any geographical area on Earth, even when a street address does not exist.
 */
export interface PlusCode {
  /**
   * The compound plus code, e.g. "9G8F+5W Zurich, Switzerland".
   */
  compoundCode: string;
  /**
   * The geo plus code, e.g. "8FVC9G8F+5W".
   */
  globalCode: string;
}
