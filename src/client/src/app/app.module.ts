import { NgModule } from '@angular/core';

// Root App component
import { AppComponent } from './app.component';

// App Routing
import { AppRoutingModule } from './app.routing.module';

import { DEFAULT_DECLARATION, DEFAULT_MODULES, DEFAULT_PROVIDERS } from "./app.module.constants"

@NgModule({
  declarations: [
    ...DEFAULT_DECLARATION
  ],
  imports: [
    ...DEFAULT_MODULES,
    AppRoutingModule
  ],
  providers: [
    ...DEFAULT_PROVIDERS
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
