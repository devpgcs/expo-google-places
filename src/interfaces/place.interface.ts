import { BooleanPlaceAttribute } from "../enums/boolean-place-attribute.enum";
import { PlacesBusinessStatus } from "../enums/places-business-status.enum";
import { PlacesPriceLevel } from "../enums/places-price-level.enum";
import { PlaceTypesTableOne } from "../types/place-types-table-one.type";
import { PlaceTypesTableThree } from "../types/place-types-table-three.type";
import { PlaceTypesTableTwo } from "../types/place-types-table-two.type";
import { AddressComponent } from "./address-component.interface";
import { LatLng } from "./lat-lng.interface";
import { LocationBounds } from "./location-bounds.interface";
import { OpeningHours } from "./opening-hours.interface";
import { PhotoMetadata } from "./photo-metadata.interface";
import { PlusCode } from "./plus-code.interface";

/**
 * Represents a particular physical place.
 *
 * A Place encapsulates information about a physical location, including its name, address, and any other information we might have about it.
 *
 * **Note**: In general, some fields will be inapplicable to certain places, or the information may not exist.
 */
export interface Place {
  /**
   * The address components of the Place's location.
   */
  addressComponents: AddressComponent[];
  /**
   * The business status of the Place.
   */
  businessStatus: PlacesBusinessStatus;
  /**
   * The location of the Place.
   */
  coordinate: LatLng;
  /**
   * The BooleanPlaceAttribute for curbside pickup.
   */
  curbsidePickup: BooleanPlaceAttribute;
  /**
   * The BooleanPlaceAttribute for delivery.
   */
  delivery: BooleanPlaceAttribute;
  /**
   * The BooleanPlaceAttribute for indoor or outdoor seating options.
   */
  dineIn: BooleanPlaceAttribute;
  /**
   * Human-readable address for the Place.
   */
  formattedAddress: string;
  /**
   * The string of the icon background color.
   */
  iconBackgroundColor: string;
  /**
   * The icon PNG URL string to the Places's type.
   */
  iconImageURL: string;
  /**
   * The name of the Place.
   */
  name: string;
  /**
   * The Place's normal business hours.
   */
  openingHours: OpeningHours;
  /**
   * The unique ID of the Place.
   */
  placeID: string;
  /**
   * The place's phone number in international format.
   */
  phoneNumber: string;
  /**
   * The metadata for a photo associated with a place.
   */
  photos: PhotoMetadata[];
  /**
   * The price level for the place on a scale from `PRICE_LEVEL_MIN_VALUE` to `PRICE_LEVEL_MAX_VALUE`.
   */
  priceLevel: PlacesPriceLevel | number;
  /**
   * The `PlusCode` location of the Place
   */
  plusCode: PlusCode;
  /**
   * The place's rating, from `RATING_MIN_VALUE` to `RATING_MAX_VALUE`, based on aggregated user reviews.
   */
  rating: number;
  /**
   * The `BooleanPlaceAttribute` for reservations.
   */
  reservable: BooleanPlaceAttribute;
  /**
   * The `BooleanPlaceAttribute` for serving beer.
   */
  servesBeer: BooleanPlaceAttribute;
  /**
   * The `BooleanPlaceAttribute` for serving breakfast.
   */
  servesBreakfast: BooleanPlaceAttribute;
  /**
   * The `BooleanPlaceAttribute` for serving brunch.
   */
  servesBrunch: BooleanPlaceAttribute;
  /**
   * The `BooleanPlaceAttribute` for serving dinner.
   */
  servesDinner: BooleanPlaceAttribute;
  /**
   * The `BooleanPlaceAttribute` for serving lunch.
   */
  servesLunch: BooleanPlaceAttribute;
  /**
   * The `BooleanPlaceAttribute` for serving vegetarian food.
   */
  servesVegetarianFood: BooleanPlaceAttribute;
  /**
   * The `BooleanPlaceAttribute` for serving wine.
   */
  servesWine: BooleanPlaceAttribute;
  /**
   * The `BooleanPlaceAttribute` for takeout service.
   */
  takeout: BooleanPlaceAttribute;
  /**
   * A list of place types for this Place.
   */
  types: (PlaceTypesTableOne | PlaceTypesTableTwo | PlaceTypesTableThree)[];
  /**
   * The number of minutes this place’s current timezone is offset from UTC.
   */
  utcOffsetMinutes: number;
  /**
   * The total number of user ratings of this Place.
   */
  userRatingsTotal: number;
  /**
   * A viewport for displaying this Place.
   */
  viewportInfo: LocationBounds;
  /**
   * The URI of the website of this Place.
   */
  website: string;
  /**
   * The `BooleanPlaceAttribute` for a wheelchair accessible entrance.
   */
  wheelchairAccessibleEntrance: BooleanPlaceAttribute;
  /**
   * The Place's secondary hours of operation(s) over the next seven days.
   *
   * @platform Android
   */
  secondaryOpeningHours?: OpeningHours;
}
