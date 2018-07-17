import { User } from './../../models/user.model';

import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info-widget',
  templateUrl: './user-info-widget.component.html',
  styleUrls: ['./user-info-widget.component.css']
})
export class UserInfoWidgetComponent implements OnInit {
  user: any = {};
  constructor( private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUser()
    .then((res) => {
      this.user = res.json().result;
    })
    .catch((err) => {
      console.log(err);
    });
  }

}
