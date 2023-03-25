import { SuperAdminComponent } from './super-admin.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUserComponent } from './../super-admin/list-user/list-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SuperAdminComponent,
    children:[
      { path: '', redirectTo:'list-user',pathMatch:"full" },
      { path: 'list-user',
      component: ListUserComponent },
      { path: 'add-user',
      component: AddUserComponent },
      { path: 'edit-user/:id',
       component: EditUserComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperAdminRoutingModule {}
