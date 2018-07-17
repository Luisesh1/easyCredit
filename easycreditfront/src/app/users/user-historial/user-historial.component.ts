import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../services/requests.service';

@Component({
  selector: 'app-user-historial',
  templateUrl: './user-historial.component.html',
  styleUrls: ['./user-historial.component.css']
})
export class UserHistorialComponent implements OnInit {
  data:any = {};
  isDataAvailable = false;
  requests: any = [];
  
  constructor(private requestsService: RequestsService) { }

  ngOnInit() {
    setInterval(() => {
      this.requestsService.getRequests()
    .then((res) => {
      this.requests = res.json().result.filter(function(o) { return o.status === "ACCEPTED" || o.status === "REJECTED" });
    })
    .catch((err) => {
      console.log(err);
    });
    },1000);
  }
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
