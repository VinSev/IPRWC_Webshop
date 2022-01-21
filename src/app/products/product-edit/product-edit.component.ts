import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../product.model";
import {ProductService} from "../product.service";
import {UserService} from "../../account/user.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  public products: Product[] = [];

  constructor(private productService: ProductService,
              private userService: UserService) { }

  public ngOnInit(): void {
    this.productService.getProducts()
      .subscribe(products => {
        this.products = products;
      })
  }

  public add(name: string, description: string, price: string, imageLink: string): void {
    let product: Product = new Product(name, description, Number(price), imageLink);
    this.products.push(product);
    this.productService.add(product, this.userService.user.token);
  }

  public remove(product: Product): void{
    this.products.splice(this.products.indexOf(product), 1);
    this.productService.delete(product, this.userService.user.token);
  }

}
