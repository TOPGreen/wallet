import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {PurchasePreviewComponent} from './purchase-preview.component';

@NgModule({
  declarations: [PurchasePreviewComponent],
  exports: [PurchasePreviewComponent],
  imports: [
    CommonModule
  ],
  providers: [DatePipe]
})
export class PurchasePreviewModule {
}
