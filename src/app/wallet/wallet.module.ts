import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet.component';



@NgModule({
    declarations: [WalletComponent],
    exports: [
        WalletComponent
    ],
    imports: [
        CommonModule
    ]
})
export class WalletModule { }
