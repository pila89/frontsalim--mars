import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ListAgentComponent } from './list-agent/list-agent.component';
import { AddEditAgentComponent } from './add-edit-agent/add-edit-agent.component';
import { ListFournisseurComponent } from './list-fournisseur/list-fournisseur.component';
import { AddEditFournisseurComponent } from './add-edit-fournisseur/add-edit-fournisseur.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { AddEditProduitComponent } from './add-edit-produit/add-edit-produit.component';


@NgModule({
  declarations: [
    AdminComponent,
    ListAgentComponent,
    AddEditAgentComponent,
    ListFournisseurComponent,
    AddEditFournisseurComponent,
    ListProduitComponent,
    AddEditProduitComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
