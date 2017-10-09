import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from '../pages/login-page/login-page.component';
import { SignupPageComponent } from '../pages/signup-page/signup-page.component';
import { PlaygroundPageComponent } from '../pages/playground-page/playground-page.component';
import { DashboardPageComponent } from '../pages/dashboard-page/dashboard-page.component';
import { AuctionPageComponent } from '../pages/auction-page/auction-page.component';
import { HomePageComponent } from '../pages/home-page/home-page.component';



export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'auth/login', component: LoginPageComponent },
  { path: 'auth/signup', component: SignupPageComponent },
  { path: 'playground', component: PlaygroundPageComponent },
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'auction/:id', component: AuctionPageComponent }
];
