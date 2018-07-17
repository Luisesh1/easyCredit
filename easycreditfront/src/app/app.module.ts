
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import 'hammerjs';
import {RequestModule} from './request/request.module';
import {UsersModule} from './users/users.module';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LoginGuardGuard } from './guards/login.guard';
import { NoLoginGuard } from './guards/nologin.guard';


const appRoutes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [ LoginGuardGuard ]  },
  { path: 'dashboard', component: DashboardComponent, canActivate: [ LoginGuardGuard ] },
  { path: 'login', component: LoginComponent, canActivate: [ NoLoginGuard ] }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RequestModule,
    UsersModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule,
    HttpModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [LoginGuardGuard, NoLoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
