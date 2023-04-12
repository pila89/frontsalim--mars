import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthentifcationRoutingModule } from './authentifcation-routing.module';
import { AuthentifcationComponent } from './authentifcation.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'src/app/shared/components/toast/toast.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';

const materials = [
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatExpansionModule,
  MatProgressBarModule,
];
@NgModule({
  declarations: [
    AuthentifcationComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    ForgetPasswordComponent,
  ],
  imports: [
    ...materials,
    CommonModule,
    AuthentifcationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ToastModule,
  ],
})
export class AuthentifcationModule {}
