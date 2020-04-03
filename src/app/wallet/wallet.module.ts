import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet.component';
import {PurchasePreviewModule} from './purchase-preview/purchase-preview.module';
import {PurchaseAddModule} from './purchase-add/purchase-add.module';

@NgModule({
    declarations: [WalletComponent],
    exports: [
        WalletComponent
    ],
  imports: [
    CommonModule,
    PurchasePreviewModule,
    PurchaseAddModule
  ]
})
export class WalletModule { }
