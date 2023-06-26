import { BooleanPlaceAttribute } from "../enums/boolean-place-attribute.enum";
import { PlacesBusinessStatus } from "../enums/places-business-status.enum";
import { PlacesPriceLevel } from "../enums/places-price-level.enum";
import { PlaceTypesTableOne } from "../types/place-types-table-one.type";
import { PlaceTypesTableThree } from "../types/place-types-table-three.type";
import { PlaceTypesTableTwo } from "../types/place-types-table-two.type";

export interface Place {
  userRatingsTotal: number;
  delivery: BooleanPlaceAttribute;
  servesDinner: BooleanPlaceAttribute;
  viewportInfo: {
    northEast: {
      longitude: number | null;
      latitude: number | null;
    };
    southWest: {
      longitude: number | null;
      latitude: number | null;
    };
  };
  wheelchairAccessibleEntrance: BooleanPlaceAttribute;
  takeout: BooleanPlaceAttribute;
  servesWine: BooleanPlaceAttribute;
  curbsidePickup: BooleanPlaceAttribute;
  placeID: string | null;
  priceLevel: PlacesPriceLevel;
  servesBeer: BooleanPlaceAttribute;
  addressComponents:
    | {
        name: string;
        types: (PlaceTypesTableOne | PlaceTypesTableTwo | PlaceTypesTableThree)[];
        shortName: string;
      }[]
    | null;
  servesBrunch: BooleanPlaceAttribute;
  iconBackgroundColor: string | null;
  openingHours: {
    periods:
      | {
          closeEvent: {
            day: number;
            time: {
              hour: number;
              minute: number;
            };
          };
          openEvent: {
            day: number;
            time: {
              minute: number;
              hour: number;
            };
          };
        }[]
      | null;
    weekdayText: string[] | null;
  };
  servesLunch: BooleanPlaceAttribute;
  utcOffsetMinutes: number | null;
  website: string | null;
  types: (PlaceTypesTableOne | PlaceTypesTableTwo | PlaceTypesTableThree)[] | null;
  plusCode: {
    compoundCode: string | null;
    globalCode: string | null;
  };
  rating: number;
  iconImageURL: string | null;
  dineIn: BooleanPlaceAttribute;
  name: string | null;
  photos:
    | {
        maxSize: {
          height: number;
          width: number;
        };
        attributions: string;
      }[]
    | null;
  businessStatus: PlacesBusinessStatus;
  coordinate: {
    longitude: number;
    latitude: number;
  };
  servesVegetarianFood: BooleanPlaceAttribute;
  phoneNumber: string | null;
  reservable: BooleanPlaceAttribute;
  formattedAddress: string | null;
  servesBreakfast: BooleanPlaceAttribute;
}
