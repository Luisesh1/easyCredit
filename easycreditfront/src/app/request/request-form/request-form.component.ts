import { Component, OnInit, AfterContentInit,ViewChild } from '@angular/core';
import {RequestsService} from '../../services/requests.service';
import { MatGridList } from '@angular/material';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit, AfterContentInit {
  @ViewChild('grid') grid: MatGridList;
  gridByBreakpoint = {
    xl: 3,
    lg: 3,
    md: 3,
    sm: 2,
    xs: 1
  };
  hide = true;
  request: any = {};
  selectedOption: any = {};
  options: any[] = [
    {npayments: 3, fee: 1.05 , caption: ' 3 pagos: 5% de interés'},
    {npayments: 6, fee: 1.07 , caption: ' 6 pagos: 7% de interés'},
    {npayments: 6, fee: 1.12 , caption: ' 9 pagos: 12% de interés'}
  ];
  constructor(private requestsServices: RequestsService, private observableMedia: ObservableMedia, private router: Router) {
  }
  ngAfterContentInit() {
    this.observableMedia.asObservable().subscribe((change: MediaChange) => {
      this.grid.cols = this.gridByBreakpoint[change.mqAlias];
    });
  }
  ngOnInit() {
    this.selectedOption = this.options[0];
    this.request.amount = 0;
    this.request.creditCard = false;
  }
  onSubmit() {
    // Mostramos el objeto usuario
    this.request.fee = this.selectedOption.fee;
    this.request.npayments = this.selectedOption.npayments;
    this.requestsServices.create(this.request).then((res) => {
      console.log(res);
      swal({
        text: "Solicitud enviada a revicion",
        icon: "success"
      }).then(() => {
        this.router.navigate(['/dashboard']);
      });
      
    }).catch((err) => {
      console.log(err);
    });

    console.log(this.request);
    console.log(this.request.amount.errors);
  }

}
