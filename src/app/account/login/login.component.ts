import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {Observable, Observer} from "rxjs";
import {Router} from "@angular/router";
import {User} from "../user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public showErrorMessage: boolean = false;

  constructor(private userService: UserService,
              private router: Router) {
  }

  public ngOnInit(): void {
    if(this.userService.user != User._emptyUser) {
      this.router.navigate([""]);
    }
  }

  public login(username: string, email: string, password: string): void {
    let observer: Observable<string> = this.userService.login(username, email, password);

    observer
      .subscribe(token => {
        if(token != "") {
          this.showErrorMessage = false;
          this.userService.user = new User(username, email, "USER", token);
          this.router.navigate([""]);
        } else {
          console.log(this.userService.user)
          this.showErrorMessage = true
      }
    }, error => {
        this.showErrorMessage = true;
      });
  }
}
