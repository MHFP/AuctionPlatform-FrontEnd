import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from "@angular/router";
import { MdButtonModule, MdCheckboxModule } from '@angular/material';


import { AppComponent } from './app.component';

import { AuthService } from './services/auth.service';

import { RequireAuthService } from './guards/require-auth.service';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { PlaygroundPageComponent } from './pages/playground-page/playground-page.component';

import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { AuthLogoutComponent } from './components/auth-logout/auth-logout.component';
import { AuthSignupComponent } from './components/auth-signup/auth-signup.component';
import { AuthUserComponent } from './components/auth-user/auth-user.component';

// import router

const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  { path: 'auth/login', component: LoginPageComponent },
  { path: 'auth/signup', component: SignupPageComponent },
  { path: 'playground', component: PlaygroundPageComponent },
];

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
    RequireAuthService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
