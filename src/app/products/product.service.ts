import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {Product} from "./product.model";


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseURL: String = "http://localhost:8080/api/v1";

  constructor(private http: HttpClient) {
    this.getProducts();
  }

  public getProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(this.baseURL + "/products");
  }

}
