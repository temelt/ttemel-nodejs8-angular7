import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_CONFIG, APP_DI_CONFIG } from './config/app.config';
import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { HeaderComponent, FooterComponent, SidebarComponent, AppLayoutComponent, BareLayoutComponent, BareHeaderComponent } from './_layout';
import { NotificationService, ApiService, ErrorsModule } from './core'
import { CollapseModule, BsDropdownModule, ModalModule, BsDatepickerModule } from 'ngx-bootstrap';
import { PaginationModule } from 'ngx-bootstrap';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';

export const createTranslateLoader = (http: HttpClient) => {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

export const DEFAULT_DECLARATION = [
    AppComponent,
    HeaderComponent,
    BareHeaderComponent,
    FooterComponent,
    SidebarComponent,
    BareLayoutComponent,
    AppLayoutComponent
];

export const DEFAULT_MODULES = [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    HttpModule,
    CoreModule,
    ErrorsModule,
    ToastNoAnimationModule,
    ToastrModule.forRoot({
        toastComponent: ToastNoAnimation,
        maxOpened: 1,
        autoDismiss: true
    }),
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClient]
        }
    }),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    BsDatepickerModule.forRoot()
];

export const DEFAULT_PROVIDERS = [
    ApiService,
    NotificationService,
    { provide: APP_CONFIG, useValue: APP_DI_CONFIG }
] 