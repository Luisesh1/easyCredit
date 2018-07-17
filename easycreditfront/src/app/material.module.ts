import {
  MatToolbarModule,
  MatGridListModule,
  MatCardModule,
  MatDividerModule,
  MatListModule,
  MatButtonModule,
  MatFormFieldModule, MatInputModule, MatCheckboxModule, MatRadioModule, MatNativeDateModule, MatDatepickerModule, MatChipsModule
} from '@angular/material';

import {NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

const modulos = [
  MatToolbarModule,
  MatIconModule,
  MatGridListModule,
  MatCardModule,
  MatDividerModule,
  MatListModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatRadioModule,
  MatChipsModule,
  MatDatepickerModule,
  MatNativeDateModule
];
@NgModule({
  imports: modulos,
  exports: modulos,
})
export class MaterialModule { }
