import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../account/user.model";
import {UserService} from "../../account/user.service";
import {OrderService} from "../order.service";
import {Router} from "@angular/router";
import {Order} from "../order.interface";
import {ShoppingCartService} from "../../shopping-cart/shopping-cart.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  public showErrorMessage: boolean = false;

  constructor(private orderService: OrderService,
              public shoppingCartService: ShoppingCartService,
              private userService: UserService,
              private router: Router) {
  }

  public ngOnInit(): void {
    if(this.userService.user.token == "") {
      this.router.navigate(["/login"]);
    }
  }

  public order(streetName: String,
               houseNumber: String,
               postcode: String,
               placeName: String): void {
    let order: Order = {
      streetName: streetName,
      houseNumber: Number(houseNumber),
      postcode: postcode,
      placeName: placeName,
      products: this.shoppingCartService.getOrderItems()
    };
    this.orderService.postOrder(order, this.userService.user.email, this.userService.user.token);
  }

}
