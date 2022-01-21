import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../account/user.service";
import {User} from "../account/user.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public userService: UserService) { }

  public ngOnInit(): void {
  }

  public logout(): void {
    this.userService.user = User._emptyUser;
  }

}
