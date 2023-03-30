import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthentifcationRoutingModule } from './authentifcation-routing.module';
import { AuthentifcationComponent } from './authentifcation.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'src/app/shared/components/toast/toast.module';


@NgModule({
  declarations: [
    AuthentifcationComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    ForgetPasswordComponent,


  ],
  imports: [
    CommonModule,
    AuthentifcationRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    ToastModule
  ]
})
export class AuthentifcationModule { }
