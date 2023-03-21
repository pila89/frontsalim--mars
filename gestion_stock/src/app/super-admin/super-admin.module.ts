import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserCardComponent } from './../super-admin/user-card/user-card.component';
import { AddEditUserComponent } from './../super-admin/add-edit-user/add-edit-user.component';
import { ListUserComponent } from './../super-admin/list-user/list-user.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { SuperAdminComponent } from './super-admin.component';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    SuperAdminComponent,
    ListUserComponent,
    AddEditUserComponent,
    UserCardComponent,
  ],
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
})
export class SuperAdminModule {}
