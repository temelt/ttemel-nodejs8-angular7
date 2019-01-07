import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BareLayoutComponent } from './_layout/bare-layout/bare-layout.component';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { AuthGuard } from './core/guard/auth.guard';
import { ErrorsComponent } from './core/errors';

const routes: Routes = [


  //Auth routes goes here
  {
    path: 'auth',
    component: BareLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'login', loadChildren: './login/login.module#LoginModule' },
    ]
  },

  // App routes goes here here
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },      
      { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardModule', canActivate: [AuthGuard] },

    ]
  },
  { path: '**', component: ErrorsComponent, data: { error: 404 } },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
