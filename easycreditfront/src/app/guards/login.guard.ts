import { UsersService } from '../services/users.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

//Este guard se encargar de bloquear el acesso sin toquen a cualquier pagina que no sea el login
@Injectable()
export class LoginGuardGuard implements CanActivate {

  logged: any = {valor: false};
  constructor(
    public us: UsersService,
    public router: Router
  ) {
    this.logged = this.us.isLogged();
  }

  canActivate() {
    if ( this.logged.valor ) {
      return true;
    } else {
      console.log( 'Bloqueado por guard' );
      this.router.navigate(['/login']);
      return false;
    }

  }
}
