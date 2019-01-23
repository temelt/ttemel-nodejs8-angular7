import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorRoutingModule } from './author-routing.module';
import { AuthorComponent } from './author.component';
import { SharedModule } from '../../shared/shared.module';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {createTranslateLoader} from "../../app.module.constants";

@NgModule({
  imports: [
    CommonModule,
    AuthorRoutingModule,
    SharedModule,
    NgxDatatableModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
  ],
  declarations: [AuthorComponent]
})
export class AuthorModule { }
