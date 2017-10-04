import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from '../pages/login-page/login-page.component';
import { SignupPageComponent } from '../pages/signup-page/signup-page.component';
import { PlaygroundPageComponent } from '../pages/playground-page/playground-page.component';
import { AuctionPageComponent } from '../pages/auction-page/auction-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'playground', pathMatch: 'full' },
  { path: 'auth/login', component: LoginPageComponent },
  { path: 'auth/signup', component: SignupPageComponent },
  { path: 'playground', component: PlaygroundPageComponent },
  { path: 'auction', component: AuctionPageComponent },
];
