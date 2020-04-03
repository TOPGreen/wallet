import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchasePreviewComponent } from './purchase-preview.component';

@NgModule({
  declarations: [PurchasePreviewComponent],
  exports: [PurchasePreviewComponent],
  imports: [
    CommonModule
  ]
})
export class PurchasePreviewModule { }
