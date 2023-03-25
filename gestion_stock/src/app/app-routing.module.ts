import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessDeniedComponent } from './shared/components/access-denied/access-denied.component';
import { NotFoundComponentComponent } from './shared/components/not-found-component/not-found-component.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/authentication/login',
  //   pathMatch: 'full',
  // },

  {
    path: 'authentifcation',
    loadChildren: () =>
      import('./features/authentification/authentifcation.module').then(
        (m) => m.AuthentifcationModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./features/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'super-admin',
    loadChildren: () =>
      import('./features/super-admin/super-admin.module').then(
        (m) => m.SuperAdminModule
      ),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./features/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'access-denied',
    component: AccessDeniedComponent,
  },
  {
    path: '**',
    component: NotFoundComponentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
