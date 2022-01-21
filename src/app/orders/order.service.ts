import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Order} from "./order.interface";
import {Observable} from "rxjs";
import {OrderItem} from "./order-item.interface";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseURL: String = "https://iprwc-api.herokuapp.com/api/v1";

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
      headers: new HttpHeaders({
        "Authorization": "Bearer " + token,
        "Content-Type": "application/json"
      })
    };
    let body = {
      "streetName": order.getStreetName(),
      "houseNumber": order.getHouseNumber(),
      "postcode": order.getPostcode(),
      "placeName": order.getPlaceName(),
      "products": order.getProducts(),
      "dateLastUpdated": order.dateLastUpdated
    };
    this.http
      .post<Order>(this.baseURL + "/orders/" + email, order, requestOptions).subscribe();
  }

  public putOrder(order: Order, token: String): void {
    let requestOptions: { headers: HttpHeaders } = {
      headers: new HttpHeaders({"Authorization": "Bearer " + token})
    };
    this.http
      .put<Order>(this.baseURL + "/orders", order, requestOptions).subscribe();
  }

  public deleteOrder(order: Order, token: String): void {
    let requestOptions: any = {
      headers: new HttpHeaders({"Authorization": "Bearer " + token}),
      body: order
    };
    this.http
      .delete<Order>(this.baseURL + "/orders", requestOptions).subscribe();
  }
}
