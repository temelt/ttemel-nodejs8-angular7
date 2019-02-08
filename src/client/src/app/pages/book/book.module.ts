import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { SharedModule } from '../../shared/shared.module';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {createTranslateLoader} from "../../app.module.constants";
import {HttpClient} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    BookRoutingModule,
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
  declarations: [BookComponent]
})
export class BookModule { }
