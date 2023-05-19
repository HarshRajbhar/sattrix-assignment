import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./login/login.component').then((a) => a.LoginComponent),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./register/register.component').then(
            (a) => a.RegisterComponent
          ),
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard-page/dashboard-page.component').then(
        (a) => a.DashboardPageComponent
      ),

    children: [
      {
        path: 'Register-user',
        loadComponent: () =>
          import('./register-user/register-user.component').then(
            (a) => a.RegisterUserComponent
          ),
      },
      {
        path: 'user-list',
        loadComponent: () =>
          import('./user-list/user-list.component').then(
            (a) => a.UserListComponent
          ),
      },
      {
        path: '',
        redirectTo: 'Register-user',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
