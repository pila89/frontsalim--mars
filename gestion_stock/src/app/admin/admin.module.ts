import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ListFournisseurComponent } from './list-fournisseur/list-fournisseur.component';
import { AddEditFournisseurComponent } from './add-edit-fournisseur/add-edit-fournisseur.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { AddEditProduitComponent } from './add-edit-produit/add-edit-produit.component';


@NgModule({
  declarations: [
    AdminComponent,
    ListFournisseurComponent,
    AddEditFournisseurComponent,
    ListProduitComponent,
    AddEditProduitComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatCardModule,
    MatButtonModule

  ]
})
export class AdminModule { }
