
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { ConfirmationModalComponent } from './shared/components/confirmation-modal/confiramtion-modal.component';
import { AngularToastifyModule, ToastService, } from 'angular-toastify';
import { DeleteModalComponent } from './shared/components/delete-modal/delete-modal.component';
import { AccessDeniedComponent } from './shared/components/access-denied/access-denied.component';
import { NotFoundComponentComponent } from './shared/components/not-found-component/not-found-component.component';
import { ToastComponent } from './shared/components/toast/toast.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationModalComponent,
    ToastComponent,
    DeleteModalComponent,
    AccessDeniedComponent,
    NotFoundComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule,
    AngularToastifyModule

  ],
  providers: [ToastService],
  bootstrap: [AppComponent],
})
export class AppModule {}
