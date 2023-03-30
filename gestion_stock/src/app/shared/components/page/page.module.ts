import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './page.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
@NgModule({
  declarations: [DashboardComponent,NavbarComponent,FooterComponent],
  imports: [RouterModule,
  CommonModule],
  providers: [],

  exports: [DashboardComponent],
})
export class PageModule {}
