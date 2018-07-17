import { User } from './../users/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  logged: any = {};
  private path: string;
  constructor(private http: Http) {
    this.path = environment.url + '/users';
  }
  login(sn) {
    const url: string = this.path + '/login';
    //console.log(url);
    return this.http.post(url, { username: sn }).pipe(
      map((res: any) => {
        res = res.json();
        console.log(res);
        localStorage.setItem('token', res.token );
        localStorage.setItem('user', JSON.stringify(res.result) );
        return res.status;
      })
    );
  }
  isLogged() {
     this.logged.valor =  (localStorage.getItem('token').length > 6);
     return this.logged;
  }
  logOut() {
    localStorage.setItem('token', null );
    localStorage.setItem('user', null );
  }
  updateUser(user) {
    const url: string = this.path + '/' + JSON.parse(localStorage.getItem('user')).id + '/?token=' + localStorage.getItem('token');
    return this.http.put(url, user).toPromise();
  }
  getUser() {
    const url: string = this.path + '/' + JSON.parse(localStorage.getItem('user')).id + '/?token=' + localStorage.getItem('token');
    //console.log(url);
    return this.http.get(url).toPromise();
  }
}
