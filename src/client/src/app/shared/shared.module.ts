import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { DIRECTIVE_DECLARATIONS, PageHeaderModule } from '.';
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NgxLoadingModule} from "ngx-loading";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BsDatepickerModule, BsDropdownModule, CollapseModule, ModalModule, PaginationModule} from "ngx-bootstrap";


@NgModule({
  imports: [
    CommonModule,
    PageHeaderModule,
    NgxLoadingModule,
    FormsModule,
    ReactiveFormsModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    BsDatepickerModule.forRoot(),
  ],
  providers: [],
   declarations: [
     ...DIRECTIVE_DECLARATIONS,    
    ConfirmModalComponent,
  ],
  entryComponents:[
    ConfirmModalComponent
  ],
    exports: [
    PageHeaderModule,
    NgxLoadingModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule,
    BsDropdownModule,
    BsDatepickerModule,
    ConfirmModalComponent
  ]
})
export class SharedModule {}
