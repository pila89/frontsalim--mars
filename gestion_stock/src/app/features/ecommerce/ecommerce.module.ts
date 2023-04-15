import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { EcommerceComponent } from './ecommerce.component';
import { HomeComponent } from './features/home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FilterComponent } from './features/home/filter/filter.component';
import { SortviewComponent } from './features/home/sortview/sortview.component';
import { ProductItemComponent } from './features/home/product-item/product-item.component';
import { MaterialsModule } from 'src/app/shared/components/materials/materials.module';
import { SearchFilterPipe } from './shared/pipes/searchFIlter.pipe';


@NgModule({
  declarations: [
    EcommerceComponent,
    HomeComponent,
    HeaderComponent,
    FilterComponent,
    SortviewComponent,
    ProductItemComponent,
    SearchFilterPipe
  ],
  imports: [
    CommonModule,
    EcommerceRoutingModule,
    MaterialsModule
  ]
})
export class EcommerceModule { }
