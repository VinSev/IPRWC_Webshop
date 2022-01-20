import { Component, OnInit } from '@angular/core';
import {OrderService} from "./order.service";
import {UserService} from "../account/user.service";
import {Router} from "@angular/router";
import {Order} from "./order.interface";
import {ShoppingCartService} from "../shopping-cart/shopping-cart.service";
import {Product} from "../products/product.model";
import {createLogErrorHandler} from "@angular/compiler-cli/ngcc/src/execution/tasks/completion";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  public orders: Order[] = [];

  constructor(public orderService: OrderService,
              public userService: UserService,
              private router: Router) {
  }

  public ngOnInit(): void {
    if(this.userService.user.token == "") {
      this.router.navigate(["/login"]);
      return;
    }
    this.orderService.getOrders(this.userService.user.email, this.userService.user.token)
      .subscribe(orders => {
        this.orders = orders;
        orders[0].products.forEach((value, product, map) => {
          console.log(product.name)
        })
      });
  }

  public remove(order: Order): void {
    this.orders.splice(this.orders.indexOf(order), 1);
    this.orderService.deleteOrder(order, this.userService.user.token);
  }

  public totalPrice(products: IterableIterator<[Product, number]>): string {
    let total: number = 0;
    for(let entry of Array.from(products)) {
      total += entry[0].price * entry[1];
    }
    return total.toFixed(2);
  }
}
