import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {Router} from "@angular/router";
import {User} from "../user.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public showErrorMessage: boolean = false;

  constructor(private userService: UserService,
              private router: Router) {
  }

  public ngOnInit(): void {
    if(this.userService.user != User._emptyUser) {
      this.router.navigate([""]);
    }
  }

  public register(username: string, email: string, password: string): void {
    let observer: Observable<string> = this.userService.register(username, email, password);

    observer
      .subscribe(token => {
        if(token != "") {
          this.showErrorMessage = false;
          this.userService.user = new User(username, email, "USER",token);
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
