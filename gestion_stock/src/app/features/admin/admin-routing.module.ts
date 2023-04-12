import { EditProduitComponent } from './edit-produit/edit-produit.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { EditFournisseurComponent } from './edit-fournisseur/edit-fournisseur.component';
import { AddFournisseurComponent } from './add-fournisseur/add-fournisseur.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { ListFournisseurComponent } from './list-fournisseur/list-fournisseur.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { TableFournisseurComponent } from './table-fournisseur/table-fournisseur.component';


const routes: Routes = [
{
     path: '',
     component: AdminComponent, 
    children: [
      { path: '', redirectTo:'table-fournisseurs',pathMatch:"full" },
      // { path: 'list-fournisseurs',
      // component: ListFournisseurComponent },
      { path: 'table-fournisseurs',
      component: TableFournisseurComponent },
      { path: 'add-fournisseur',
      component: AddFournisseurComponent },
      { path: 'edit-fournisseur/:id',
       component: EditFournisseurComponent },
      { path: 'list-produit',
       component: ListProduitComponent },
      { path: 'add-produit',
       component: AddProduitComponent },
      { path: 'edit-produit/:id',
       component: EditProduitComponent },
      ] }];

//



//

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
