import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';

import { AccessDeniedComponent } from './shared/components/access-denied/access-denied.component';
import { NotFoundComponentComponent } from './shared/components/not-found-component/not-found-component.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AngularToastifyModule, ToastService } from 'angular-toastify';
import { ContactnousComponent } from './shared/components/contactnous/contactnous.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    AccessDeniedComponent,
    NotFoundComponentComponent,
    ContactnousComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule,
    AngularToastifyModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatDialogModule


  ],
  providers: [ToastService],

  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
