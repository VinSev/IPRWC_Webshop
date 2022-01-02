import {Product} from "../products/product.model";

export class ShoppingCart {
  private _products: Product[] = [];

  public get products(): Product[] {
    return this._products;
  }

  public get(index: number): Product {
    return this._products[index];
  }

  public add(product: Product): void {
    this._products.push(product);
  }

  public remove(index: number): void {
    this._products.splice(index, 1);
  }
}
