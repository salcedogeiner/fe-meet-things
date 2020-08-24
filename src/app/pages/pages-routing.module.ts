import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from '../core/guardian/AuthGuardService';
import { RegisterComponent } from './users/register/register.component';
import { RegisterConferenceComponent } from './conferences/register-conference/register-conference.component';
import { ConferencesComponent } from './conferences/conferences.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [ AuthGuardService ],
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'conferences',
    component: ConferencesComponent,
    canActivate: [ AuthGuardService ],
  },
  {
    path: 'new-conference',
    component: RegisterConferenceComponent,
    canActivate: [ AuthGuardService ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
