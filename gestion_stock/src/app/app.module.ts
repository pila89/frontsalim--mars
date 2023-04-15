// import { ServiceWorkerModule } from '@angular/service-worker';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccessDeniedComponent } from './shared/components/access-denied/access-denied.component';
import { NotFoundComponentComponent } from './shared/components/not-found-component/not-found-component.component';
import { AngularToastifyModule, ToastService } from 'angular-toastify';
import { ContactnousComponent } from './shared/components/contactnous/contactnous.component';
import { CommonModule } from '@angular/common';
import { ToastModule } from './shared/components/toast/toast.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MaterialsModule } from './shared/components/materials/materials.module';
// import ServiceWorkerModule from '@angular/service-worker';

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
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularToastifyModule,
    CommonModule,
    ToastModule,
    MaterialsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    // ServiceWorkerModule
  ],

  providers: [ToastService],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
