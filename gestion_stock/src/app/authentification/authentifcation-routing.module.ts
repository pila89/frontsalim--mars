import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentifcationComponent } from './authentifcation.component';

const routes: Routes = [{ path: '', component: AuthentifcationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthentifcationRoutingModule { }
