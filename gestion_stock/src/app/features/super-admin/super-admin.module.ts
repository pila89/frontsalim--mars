
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
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

import { MatTableModule } from '@angular/material/table';
import { UserTableComponent } from './user-table/user-table.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { PageModule } from 'src/app/shared/components/page/page.module';




@NgModule({
  declarations: [
    SuperAdminComponent,
    ListUserComponent,
    AddEditUserComponent,
    UserCardComponent,
    AddUserComponent,
    EditUserComponent,
    UserTableComponent

  ],
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    PageModule
  ],
})
export class SuperAdminModule {}
