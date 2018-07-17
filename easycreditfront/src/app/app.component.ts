import { UsersService } from './services/users.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLogged: any = {};
  breakpoint = 3;
  constructor(private usersSevice: UsersService){

  }
  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 3;
    this.isLogged = this.usersSevice.isLogged();
  }
  logOut() {
    this.usersSevice.logOut();
    this.isLogged.valor = false;
  }
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 3;
  }
}


