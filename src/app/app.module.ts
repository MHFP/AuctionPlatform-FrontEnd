import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from "@angular/router";
import { MdButtonModule, MdCheckboxModule } from '@angular/material';

import { routes } from './routes/app.routes'


import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { AuthLogoutComponent } from './components/auth-logout/auth-logout.component';
import { AuthSignupComponent } from './components/auth-signup/auth-signup.component';
import { AuthUserComponent } from './components/auth-user/auth-user.component';

import { AuthService } from './services/auth.service';
import { RequireAuthService } from './guards/require-auth.service';
import { AuctionsService } from './services/auctions.service';


import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { PlaygroundPageComponent } from './pages/playground-page/playground-page.component';

import { AuctionCreateComponent } from './components/auction-create/auction-create.component';
import { AuctionMyAuctionsListComponent } from './components/auction-my-auctions-list/auction-my-auctions-list.component';
import { AuctionMyBidsListComponent } from './components/auction-my-bids-list/auction-my-bids-list.component';
import { AuctionAllListComponent } from './components/auction-all-list/auction-all-list.component';
import { AuctionActiveComponent } from './components/auction-active/auction-active.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { AuctionPageComponent } from './pages/auction-page/auction-page.component';



@NgModule({
  declarations: [
    AppComponent,
    PlaygroundPageComponent,
    LoginPageComponent,
    SignupPageComponent,
    AuthLoginComponent,
    AuthLogoutComponent,
    AuthSignupComponent,
    AuthUserComponent,
    AuctionCreateComponent,
    AuctionMyAuctionsListComponent,
    AuctionMyBidsListComponent,
    AuctionAllListComponent,
    AuctionActiveComponent,
    DashboardPageComponent,
    AuctionPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MdButtonModule,
    MdCheckboxModule
  ],
  providers: [
    AuthService,
    RequireAuthService,
    AuctionsService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
