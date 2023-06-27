import { HoursType } from "../enums/hours-type.enum";
import { Period } from "./period.interface";
import { SpecialDay } from "./special-day.interface";

/**
 * Represents information on when a `Place` will be open during the week.
 */
export interface OpeningHours {
  /**
   * The HoursType of the opening hours.
   *
   * @platform Android
   */
  hoursType?: HoursType;
  /**
   * A list of `Period` objects that provide more detailed information that is equivalent to the data provided by `weekdayText`.
   */
  periods?: Period[];
  /**
   * A list of up to seven `SpecialDay` entries, corresponding to the next seven days.
   *
   * @platform Android
   */
  specialDays?: SpecialDay[];
  /**
   * A list of strings that represent opening and closing hours in human readable form.
   */
  weekdayText?: string[];
}
