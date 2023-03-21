import { AddEditProduitComponent } from './add-edit-produit/add-edit-produit.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { AddEditFournisseurComponent } from './add-edit-fournisseur/add-edit-fournisseur.component';
import { ListFournisseurComponent } from './list-fournisseur/list-fournisseur.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'list-fournisseur', component: ListFournisseurComponent },
  { path: 'add-fournisseur', component: AddEditFournisseurComponent },
  { path: 'edit-fournisseur/:id', component: AddEditFournisseurComponent },
  { path: 'list-produit', component: ListProduitComponent },
  { path: 'add-produit', component: AddEditProduitComponent },
  { path: 'edit-produit/:id', component: AddEditProduitComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
