import { Component, OnInit } from '@angular/core';
import {UserService} from "../../user.service";
import {Router} from "@angular/router";
import {User} from "../../user.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public showErrorMessage: boolean = false;

  constructor(private userService: UserService,
              private router: Router) {
  }

  public ngOnInit(): void {
    if(this.userService.user != User._emptyUser) {
      this.router.navigate(["/account"]);
    }
  }

  public login(username: string, email: string, password: string): void {
    let observer: Observable<string> = this.userService.login(username, email, password, "ADMIN");

    observer
      .subscribe(token => {
        if(token != "") {
          this.showErrorMessage = false;
          this.userService.user = new User(username, email, "ADMIN",token);
          this.router.navigate(["/account"]);
        } else {
          console.log(this.userService.user)
          this.showErrorMessage = true
        }
      }, error => {
        this.showErrorMessage = true;
      });
  }

}
