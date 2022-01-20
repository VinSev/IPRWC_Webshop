import {Product} from "../products/product.model";

export type OrderItem = {
  product: Product;
  amount: number;
}
