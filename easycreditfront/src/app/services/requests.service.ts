import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  private path: string;
  constructor(private http: Http) {
    this.path = environment.url + '/requests';
  }
  create({amount, age, npayments, fee, creditCard}) {
    const url: string = this.path + '/new?token=' + localStorage.getItem('token');
    //console.log(url);
    return this.http.post(url, {amount, age, npayments, fee, creditCard}).toPromise();
  }
  getRequests() {
    const url: string = this.path + '?token=' + localStorage.getItem('token');
    //console.log(url);
    return this.http.get(url).toPromise();
  }
}
