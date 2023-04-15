import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToastModule } from '../toast/toast.module';
import {MatBadgeModule} from '@angular/material/badge';


const materials = [
  MatBadgeModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatButtonModule,
  MatFormFieldModule,
  MatSidenavModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatIconModule,
  MatDialogModule,
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatExpansionModule,
  MatSelectModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatProgressBarModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...materials
  ],
  exports: [
    CommonModule,
    ...materials
  ]
})
export class MaterialsModule { }
