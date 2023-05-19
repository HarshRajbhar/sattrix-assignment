import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [
      {
        path: '',
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
    ],
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard-page/dashboard-page.component').then(
        (a) => a.DashboardPageComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
