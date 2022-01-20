import {Product} from "../products/product.model";

export type Order = {
  id?: number;
  streetName: String;
  houseNumber: number;
  postcode: String;
  placeName: String;
  date?: String;
  products: Map<Product, number>;
}
