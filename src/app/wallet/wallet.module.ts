import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet.component';
import {PurchasePreviewModule} from './purchase-preview/purchase-preview.module';
import {PurchaseAddModule} from './purchase-add/purchase-add.module';
import {PurchasesService} from './purchases.service';
import {IPurchasesApiServiceToken} from '../../shared/interfaces/IPurchasesApiService';
import {PurchasesApiMockService} from '../../shared/services/purchasesApiMock.service';

@NgModule({
    declarations: [WalletComponent],
    exports: [
        WalletComponent
    ],
  imports: [
    CommonModule,
    PurchasePreviewModule,
    PurchaseAddModule
  ],
  providers: [
    PurchasesService,
    {provide: IPurchasesApiServiceToken, useClass: PurchasesApiMockService}
  ]
})
export class WalletModule { }
