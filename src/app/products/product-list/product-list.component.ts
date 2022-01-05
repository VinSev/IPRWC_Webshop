import { Component, OnInit } from '@angular/core';
import {Product} from "../product.model";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public products: Product[] = [];

  constructor(private productService: ProductService) { }

  public ngOnInit(): void {
    this.productService.getProducts()
      .subscribe(data => {
        this.products = data;
      });
  }

}
