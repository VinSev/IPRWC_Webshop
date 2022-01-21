import { Component, OnInit } from '@angular/core';
import {OrderService} from "./order.service";
import {UserService} from "../account/user.service";
import {Router} from "@angular/router";
import {Order} from "./order.interface";
import {ShoppingCartService} from "../shopping-cart/shopping-cart.service";
import {Product} from "../products/product.model";
import {createLogErrorHandler} from "@angular/compiler-cli/ngcc/src/execution/tasks/completion";
import {OrderItem} from "./order-item.interface";

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
      });
  }

  public remove(order: Order): void {
    this.orders.splice(this.orders.indexOf(order), 1);
    this.orderService.deleteOrder(order, this.userService.user.token);
  }

  public totalPrice(orderItems: OrderItem[]): string {
    let total: number = 0;
    for (let orderItem of orderItems) {
      console.log(orderItem)
      total += orderItem.price * orderItem.amount;
    }
    return total.toFixed(2);
  }
}
