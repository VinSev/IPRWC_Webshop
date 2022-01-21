import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {Product} from "./product.model";


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseURL: String = "http://localhost:8080/api/v1";

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(this.baseURL + "/products");
  }

  public add(product: Product, token: String): void {
    let requestOptions = {
      headers: new HttpHeaders({"Authorization": "Bearer " + token}),
    };
    console.log(product)
    this.http
      .post<Product>(this.baseURL + "/products", product, requestOptions).subscribe();
  }

  public delete(product: Product, token: String): void {
    let requestOptions = {
      headers: new HttpHeaders({"Authorization": "Bearer " + token}),
      body: product
    };
    this.http
      .delete<Product>(this.baseURL + "/products", requestOptions).subscribe();
  }

}
