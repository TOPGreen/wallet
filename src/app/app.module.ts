import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {WalletModule} from './wallet/wallet.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WalletModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
