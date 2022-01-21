import {Product} from "../products/product.model";
import {OrderItem} from "./order-item.interface";

export class Order {
  constructor(private streetName: String,
              private houseNumber: number,
              private postcode: String,
              private placeName: String,
              public products: OrderItem[],
              public dateLastUpdated: String,
              private id?: number) {
  }

  getStreetName(): String {
    return this.streetName;
  }

  setStreetName(value: String) {
    this.streetName = value;
  }

  getHouseNumber(): number {
    return this.houseNumber;
  }

  setHouseNumber(value: number) {
    this.houseNumber = value;
  }

  getPostcode(): String {
    return this.postcode;
  }

  setPostcode(value: String) {
    this.postcode = value;
  }

  getPlaceName(): String {
    return this.placeName;
  }

  setPlaceName(value: String) {
    this.placeName = value;
  }

  getProducts(): OrderItem[] {
    return this.products;
  }

  setProducts(value: OrderItem[]) {
    this.products = value;
  }

  clearProducts() {
    this.products = [];
  }

  getId(): number {
    return <number>this.id;
  }

  setId(value: number) {
    this.id = value;
  }

  getDate_last_updated(): String {
    return <String>this.dateLastUpdated;
  }

  setDate_last_updated(value: String) {
    this.dateLastUpdated = value;
  }
}
