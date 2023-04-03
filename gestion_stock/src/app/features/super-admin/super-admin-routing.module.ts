import { SuperAdminComponent } from './super-admin.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserTableComponent } from './user-table/user-table.component';

const routes: Routes = [
  {
    path: '',
    component: SuperAdminComponent,
    children: [
      { path: '', redirectTo: 'user-table', pathMatch: 'full' },
      { path: 'user-table', component: UserTableComponent },
      { path: 'list-user', component: UserTableComponent },
      { path: 'add-user', component: AddUserComponent },
      { path: 'edit-user/:id', component: EditUserComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperAdminRoutingModule {}
