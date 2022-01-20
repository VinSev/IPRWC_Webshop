import {Product} from "../products/product.model";
import {OrderItem} from "./order-item.interface";

export type Order = {
  id?: number;
  streetName: String;
  houseNumber: number;
  postcode: String;
  placeName: String;
  date_last_updated?: String;
  products: OrderItem[];
}
