import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorRoutingModule } from './author-routing.module';
import { AuthorComponent } from './author.component';
import { SharedModule } from '../../shared/shared.module';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";

@NgModule({
  imports: [
    CommonModule,
    AuthorRoutingModule,
    SharedModule,
    NgxDatatableModule
  ],
  declarations: [AuthorComponent]
})
export class AuthorModule { }
