import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../product.model";
import {ShoppingCartService} from "../../../shopping-cart/shopping-cart.service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() public product!: Product;

  constructor(private shoppingCartService: ShoppingCartService) { }

  public ngOnInit(): void {
  }

  public onAddToCart() {
    this.shoppingCartService.add(this.product);
  }

}
