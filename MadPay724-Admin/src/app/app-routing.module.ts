import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/components/login/login.component';
import { RegisterComponent } from './components/auth/components/register/register.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {path:'panel', redirectTo:'/panel/dashboard',pathMatch:'full'},
  {path:'auth', redirectTo:'/auth/login',pathMatch:'full'},
  {path: 'auth',loadChildren : () => import('./components/auth/auth.module').then(m => m.AuthModule)} ,
  {
    path: 'panel',
    canActivate: [AuthGuard],
    loadChildren : () => import('./components/panel/panel.module').then(m => m.PanelModule)} ,
  {path:'**', redirectTo:'/auth/login',pathMatch:'full',},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
