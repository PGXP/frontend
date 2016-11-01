import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './modules/home/home.component';
import { CepComponent } from './modules/cep/cep.component';
import { AboutComponent } from './modules/about/about.component';
import { LoginComponent } from './modules/login/login.component';

import {AuthGuard} from './core/security';
//import {GuardService} from '@demoiselle/security'; // when importing from npm repository

export const routes: Routes = [
  { 
    path: '',
    data: ['Home'], 
    component: HomeComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'about',
    data: ['Sobre'],
    component: AboutComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'login', 
    data: ['Login'],
    component: LoginComponent
  },
  { 
    path: 'cep', 
    data: ['Cep'],
    component: CepComponent
  }
];

export const routing = RouterModule.forRoot(routes, {useHash: true});
