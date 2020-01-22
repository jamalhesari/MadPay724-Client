import { NgModule} from '@angular/core';

import { AuthComponent } from './auth.component';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import { AuthService } from './services/auth.service';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [
    AuthRoutingModule,
    FormsModule,
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent],
    providers: [AuthService], 
})
export class AuthModule { }
