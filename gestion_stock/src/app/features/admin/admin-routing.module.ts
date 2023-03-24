import { EditProduitComponent } from './edit-produit/edit-produit.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { EditFournisseurComponent } from './edit-fournisseur/edit-fournisseur.component';
import { AddFournisseurComponent } from './add-fournisseur/add-fournisseur.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { ListFournisseurComponent } from './list-fournisseur/list-fournisseur.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'list-fournisseur', component: ListFournisseurComponent },
  { path: 'add-fournisseur', component: AddFournisseurComponent },
  { path: 'edit-fournisseur/:id', component: EditFournisseurComponent },
  { path: 'list-produit', component: ListProduitComponent },
  { path: 'add-produit', component: AddProduitComponent },
  { path: 'edit-produit/:id', component: EditProduitComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
