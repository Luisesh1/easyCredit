import { UsersService } from './../services/users.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoWidgetComponent } from './user-info-widget/user-info-widget.component';
import { FormComponent } from './form/form.component';
import {MaterialModule} from '../material.module';
import { UserHistorialComponent } from './user-historial/user-historial.component';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
const usersRoutes: Routes = [
  { path: 'users',
    children: [
      { path: 'perfil', component: FormComponent}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild(usersRoutes),
    ChartsModule
  ],
  declarations: [
    UserInfoWidgetComponent,
    FormComponent,
    UserHistorialComponent
  ],
  exports: [
    UserInfoWidgetComponent,
    UserHistorialComponent
  ],
  providers: [UsersService]

})
export class UsersModule { }
