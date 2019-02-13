import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book.component';
import {BookDetailComponent} from "./book-detail/book-detail.component";

const routes: Routes = [
  {
      path: '', component: BookComponent
  },
  {
    path: 'book-detail/:id', component: BookDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
