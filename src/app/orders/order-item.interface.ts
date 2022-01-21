import {Product} from "../products/product.model";

export type OrderItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageLink: string;
  amount: number;
}
