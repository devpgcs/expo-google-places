/**
 * Represents information on a particular day over the next seven days which may have opening hours that differ from the normal operating hours.
 */
export interface SpecialDay {
  /**
   * The date for which there may be exceptional hours.
   */
  date: string;
  /**
   * Whether or not the day has exceptional hours.
   */
  isExceptional: boolean;
}
