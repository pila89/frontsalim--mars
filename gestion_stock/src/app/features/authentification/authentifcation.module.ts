import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthentifcationRoutingModule } from './authentifcation-routing.module';
import { AuthentifcationComponent } from './authentifcation.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';


@NgModule({
  declarations: [
    AuthentifcationComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    ForgetPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthentifcationRoutingModule
  ]
})
export class AuthentifcationModule { }
