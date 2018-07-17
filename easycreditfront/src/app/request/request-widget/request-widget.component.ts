
import { Component, OnInit } from '@angular/core';

import { RequestsService } from '../../services/requests.service';
//En este widget se muestran las solicitudes pendientes 
@Component({
  selector: 'app-request-widget',
  templateUrl: './request-widget.component.html',
  styleUrls: ['./request-widget.component.css']
})
export class RequestWidgetComponent implements OnInit {
  requests: any = [];
  constructor(private requestsService: RequestsService) { }

  ngOnInit() {
    setInterval(() => {
      this.requestsService.getRequests()
    .then((res) => {
      this.requests = res.json().result.filter(function(o) { return o.status === "PENDING" });;
    })
    .catch((err) => {
      console.log(err);
    });
    },1000);
  }

}
