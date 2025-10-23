import { RouterModule, Routes } from '@angular/router';

import { ArticoliComponent } from './modules/articoli/pages/articoli/articoli.component';
import { AuthGuard } from 'src/app/core/services/route-guard.service';
import { ErrorComponent } from './modules/errors/pages/error/error.component';
import { GridArticoliComponent } from './modules/articoli/pages/grid-articoli/grid-articoli.component';
import { LoginComponent } from './modules/login/pages/login/login.component';
import { LogoutComponent } from './modules/logout/pages/logout/logout.component';
import { NgModule } from '@angular/core';
import { WelcomeComponent } from './modules/home/pages/welcome/welcome.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path:'welcome', component: WelcomeComponent, canActivate:[AuthGuard]},
  {path:'welcome/:userid', component: WelcomeComponent, canActivate:[AuthGuard]},
  {path:'articoli', component : ArticoliComponent, canActivate:[AuthGuard]},
  {path:'articoli/grid', component : GridArticoliComponent, canActivate:[AuthGuard]},
  {path:'logout', component : LogoutComponent},
  {path:'**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
