/**
 * Represents a local time with just hours and minutes.
 */
export interface LocalTime {
  /**
   * The hours in 24 hour format. i.e. 0-23.
   */
  hour: number;
  /**
   * The minutes. i.e. 0-59.
   */
  minute: number;
}
