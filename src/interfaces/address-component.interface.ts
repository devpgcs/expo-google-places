import { PlaceTypesTableOne } from "../types/place-types-table-one.type";
import { PlaceTypesTableThree } from "../types/place-types-table-three.type";
import { PlaceTypesTableTwo } from "../types/place-types-table-two.type";

/**
 * Represents a component of an address, e.g., street number, postcode, city, etc.
 */
export interface AddressComponent {
  /**
   * Name of the address component, e.g. "Sydney".
   */
  name: string;
  /**
   * Short name of the address component, e.g. "AU".
   */
  shortName: string;
  /**
   * Types of the AddressComponent. For example, "country" or "administrative_area_level_1".
   */
  types: (PlaceTypesTableOne | PlaceTypesTableTwo | PlaceTypesTableThree)[];
}
