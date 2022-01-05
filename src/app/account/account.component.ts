import {AfterContentInit, Component, OnInit} from '@angular/core';
import {UserService} from "./user.service";
import {User} from "./user.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router) { }

  public ngOnInit(): void {
    if(this.userService.user == User._emptyUser) {
      this.router.navigate(["/login"]);
    }
  }
}
