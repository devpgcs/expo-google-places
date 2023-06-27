import { TimeOfWeek } from "./time-of-week.interface";

/**
 * Represents a time segment. It may contain an open `TimeOfWeek`, or a close `TimeOfWeek`, or both.
 */
export interface Period {
  /**
   * The time marker for when the `Place` closes or `null` if it's always open.
   */
  closeEvent: TimeOfWeek | null;
  /**
   * The time marker for when the `Place` opens.
   */
  openEvent: TimeOfWeek;
}
