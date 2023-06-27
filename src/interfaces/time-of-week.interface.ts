import { DayOfWeek } from "../enums/day-of-week.enum";
import { LocalTime } from "./local-time.interface";

/**
 * Represents the opening or closing details for a `Period`.
 */
export interface TimeOfWeek {
  /**
   * The day of the week.
   */
  day: DayOfWeek;
  /**
   * The `LocalDate` of the opening or close details.
   */
  time: LocalTime;
  /**
   * Date as a string in YYYY-MM-DD format, such as 2007-12-31.
   *
   * @platform Android
   */
  date?: string;
}
