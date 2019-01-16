import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { SharedModule } from '../../shared/shared.module';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";

@NgModule({
  imports: [
    CommonModule,
    BookRoutingModule,
    SharedModule,
    NgxDatatableModule
  ],
  declarations: [BookComponent]
})
export class BookModule { }
