import {User} from "../account/user.model";
import {Product} from "../products/product.model";

export interface Order {
  user: User;
  product: Product[];
}
