import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageAuctionComponent } from './pages/page-auction/page-auction.component';

@NgModule({
  declarations: [
    AppComponent,
    PageAuctionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
