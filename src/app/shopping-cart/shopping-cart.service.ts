import { Injectable } from '@angular/core';
import {Product} from "../products/product.model";
import {OrderItem} from "../orders/order-item.interface";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private _products: Map<Product, number> = new Map<Product, number>();

  constructor() { }

  public get products(): Map<Product, number> {
    return this._products;
  }

  public setProducts(products: Product[]): void {
    this.clear();
    for(let product of products) {
      this.add(product);
    }
  }

  public getOrderItems(): OrderItem[] {
    let orderItems: OrderItem[] = [];
    this._products.forEach((amount, product) => {
      orderItems.push({product, amount});
    })
    return orderItems;
  }

  public clear(): void {
    this._products.clear();
  }

  public add(product: Product): void {
    let amount: number = 1;
    if (this._products.has(product)) {
      // @ts-ignore
      //Ignoring 'possibly undefined' error since we already checked if the product exists.
      amount += this._products.get(product);
    }
    this._products.set(product, amount);
  }

  public remove(product: Product): void {
    if(!this._products.has(product)) {
      return;
    }
    // @ts-ignore
    //Ignoring 'possibly undefined' error since we already checked if the product exists.
    let amount = this._products.get(product) - 1;
    if(amount == 0) {
      this._products.delete(product);
    } else {
      this._products.set(product, amount);
    }
  }

  public clearProduct(product: Product): void {
    if(!this._products.has(product)) {
      return;
    }
    this._products.delete(product);
  }

  public totalPrice(): string {
    let total: number = 0;
    this._products.forEach((amount, product) => {
      total += product.price * amount;
    });
    return total.toFixed(2);
  }

  public totalPriceOfProduct(product: Product, amount: number): string {
    return (product.price * amount).toFixed(2)
  }

  public totalAmountOfProducts(): number {
    let count: number = 0;
    this._products.forEach(amount => {
      count += amount;
    });
    return count;
  }

}
