import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "./shopping-cart.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor(public shoppingCartService: ShoppingCartService,
              private router: Router) {
  }

  public ngOnInit(): void {
  }

  public order(): void {
    this.router.navigate(["shopping-cart/order"]);
  }


}
