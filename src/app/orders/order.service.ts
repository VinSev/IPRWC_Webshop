import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Order} from "./order.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseURL: String = "http://localhost:8080/api/v1";

  constructor(private http: HttpClient) { }

  public getOrders(email: String, token: String): Observable<Order[]> {
    let requestOptions: { headers: HttpHeaders } = {
      headers: new HttpHeaders({"Authorization": "Bearer " + token})
    };
    return this.http
      .get<Order[]>(this.baseURL + "/orders/" + email, requestOptions);
  }

  public postOrder(order: Order, email: String, token: String): void {
    let requestOptions: { headers: HttpHeaders } = {
      headers: new HttpHeaders({"Authorization": "Bearer " + token})
    };
    this.http
      .post<Order>(this.baseURL + "/orders/" + email, order, requestOptions);
  }

  public putOrder(order: Order, token: String): void {
    let requestOptions: { headers: HttpHeaders } = {
      headers: new HttpHeaders({"Authorization": "Bearer " + token})
    };
    this.http
      .put<Order>(this.baseURL + "/orders", order, requestOptions);
  }

  public deleteOrder(order: Order, token: String): void {
    let requestOptions: any = {
      headers: new HttpHeaders({"Authorization": "Bearer " + token}),
      body: order
    };
    this.http
      .delete<Order>(this.baseURL + "/orders", requestOptions);
  }
}
