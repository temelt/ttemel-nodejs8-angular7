import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BareLayoutComponent } from './_layout/bare-layout/bare-layout.component';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { ErrorsComponent } from './core/errors';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },      
      { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardModule'},
      { path: 'authors', loadChildren: './pages/author/author.module#AuthorModule'},
      { path: 'books', loadChildren: './pages/book/book.module#BookModule'},
    ]
  },
  { path: '**', component: ErrorsComponent, data: { error: 404 } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
