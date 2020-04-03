import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseAddComponent } from './purchase-add.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [PurchaseAddComponent],
  exports: [
    PurchaseAddComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class PurchaseAddModule { }
