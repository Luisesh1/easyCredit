import { Component, OnInit, AfterContentInit,ViewChild } from '@angular/core';
import { MatGridList } from '@angular/material';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, AfterContentInit {
  user:any = {};
  @ViewChild('grid') grid: MatGridList;
  gridByBreakpoint = {
    xl: 3,
    lg: 3,
    md: 3,
    sm: 2,
    xs: 1
  };
  hide = true;
  constructor(private us: UsersService, private observableMedia: ObservableMedia, private router: Router) {
  }
  ngAfterContentInit() {
    this.observableMedia.asObservable().subscribe((change: MediaChange) => {
      this.grid.cols = this.gridByBreakpoint[change.mqAlias];
    });
  }

  ngOnInit() {
  }
  onSubmit() {
    this.us.updateUser(this.user)
    .then((res) => {
      this.router.navigate(['/dashboard']);
    })
    .catch((err) => {
      console.log(err);
    });
  }

}
