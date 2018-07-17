import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = "";
  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    this.usersService.login(this.username)
    .subscribe((res) => {
      this.usersService.isLogged();
      swal("Bienvenido");
      this.router.navigate(['/dashboard']);
    });
  }
}
