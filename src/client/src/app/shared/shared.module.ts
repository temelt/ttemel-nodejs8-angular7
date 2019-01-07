import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { BsDropdownModule, PaginationModule, BsDatepickerModule, CollapseModule, ModalModule } from 'ngx-bootstrap';
import { LoadingModule } from 'ngx-loading';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DIRECTIVE_DECLARATIONS, PageHeaderModule } from '.';


@NgModule({
  imports: [
    CommonModule,
    PageHeaderModule,
    LoadingModule,
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
    LoadingModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule,
    BsDropdownModule,
    BsDatepickerModule,
    ConfirmModalComponent
  ]
})
export class SharedModule {}
