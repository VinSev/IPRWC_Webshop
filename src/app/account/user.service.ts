import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./user.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL: String = "https://iprwc-api.herokuapp.com/api/v1";
  private _user: User = User._emptyUser;

  constructor(private http: HttpClient) {
  }

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  public login(username: string, email: string, password: string, role?: string): Observable<string> {
    let body: unknown = {
      "username": username,
      "email": email,
      "password": password,
      "role": role
    }
    return this.http
      .post(this.baseURL + "/users/login", body, {responseType: "text"});
  }

  public register(username: string, email: string, password: string): Observable<string> {
    let body: unknown = {
      "username": username,
      "email": email,
      "password": password
    };
    return this.http
      .post(this.baseURL + "/users/register", body, {responseType: "text"});
  }
}
