import { AddEditUserComponent } from '../super-admin/add-edit-user/add-edit-user.component';
import { ListUserComponent } from '../super-admin/list-user/list-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
