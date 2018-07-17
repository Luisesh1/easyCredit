import { UsersService } from '../services/users.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';



//Este guard impide el acesso al login  cuando ya se esta logueado 
@Injectable()
export class NoLoginGuard implements CanActivate {
  logged: any = {valor: false};
  constructor(
    public us: UsersService,
    public router: Router
  ) {
    this.logged = this.us.isLogged();
  }

  canActivate() {
    if ( !this.logged.valor ) {
      return true;
    } else {
      console.log( 'Bloqueado por guard' );
      this.router.navigate(['/dashboard']);
      return false;
    }

  }
}
