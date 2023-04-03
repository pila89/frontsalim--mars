import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ListFournisseurComponent } from './list-fournisseur/list-fournisseur.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { AddFournisseurComponent } from './add-fournisseur/add-fournisseur.component';
import { EditFournisseurComponent } from './edit-fournisseur/edit-fournisseur.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { EditProduitComponent } from './edit-produit/edit-produit.component';
import { PageModule } from 'src/app/shared/components/page/page.module';
import { TableFournisseurComponent } from './table-fournisseur/table-fournisseur.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
  declarations: [
    AdminComponent,
    ListFournisseurComponent,
    ListProduitComponent,
    AddFournisseurComponent,
    EditFournisseurComponent,
    AddProduitComponent,
    EditProduitComponent,
    TableFournisseurComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatCardModule,
    MatButtonModule,
     MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    PageModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
     MatSortModule

  ]
})
export class AdminModule { }
