import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestFormComponent } from './request-form/request-form.component';
import { RequestWidgetComponent } from './request-widget/request-widget.component';
import {MaterialModule} from '../material.module';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {IntegerDirective} from '../directives/integer.directive';
import {HttpModule} from '@angular/http';

const requestRoutes: Routes = [
  { path: 'request',
    children: [
      { path: 'new', component: RequestFormComponent}
    ]
  }
];
@NgModule({
  declarations: [
    RequestFormComponent,
    RequestWidgetComponent,
    IntegerDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(requestRoutes),
    FormsModule,
    HttpModule
  ],
  exports:[
    RequestWidgetComponent
  ]

})
export class RequestModule { }
