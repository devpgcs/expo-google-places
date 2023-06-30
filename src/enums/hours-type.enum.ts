/**
 * Identifies the type of secondary opening hours.
 *
 * Is only set for secondary opening hours (i.e. opening hours from `Place.secondaryOpeningHours`).
 */
export enum HoursType {
  /**
   * Access opening hours.
   */
  ACCESS,
  /**
   * Breakfast opening hours.
   */
  BREAKFAST,
  /**
   * Brunch opening hours.
   */
  BRUNCH,
  /**
   * Delivery opening hours.
   */
  DELIVERY,
  /**
   * Dinner opening hours.
   */
  DINNER,
  /**
   * Drive through opening hours.
   */
  DRIVE_THROUGH,
  /**
   * Happy hour opening hours.
   */
  HAPPY_HOUR,
  /**
   * Kitchen opening hours.
   */
  KITCHEN,
  /**
   * Lunch opening hours.
   */
  LUNCH,
  /**
   * Online service opening hours.
   */
  ONLINE_SERVICE_HOURS,
  /**
   * Pickup opening hours.
   */
  PICKUP,
  /**
   * Senior opening hours.
   */
  SENIOR_HOURS,
  /**
   * Takeout opening hours.
   */
  TAKEOUT,
}
