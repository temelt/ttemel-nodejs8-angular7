import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, Event, NavigationError } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import * as StackTraceParser from 'error-stack-parser';

@Injectable()
export class ErrorsService {

  constructor(
    private injector: Injector,
    private router: Router,
    private zone: NgZone
  ) {

    let self = this;
    // Subscribe to the NavigationError
    this.router
      .events
      .subscribe((event: Event) => {
        if (event instanceof NavigationError) {
          console.log(event.error);
        }
      });
  }

  log(error) {
    const errorToSend = this.addContextInfo(error);
    console.log(error);
  }

  addContextInfo(error) {
    // You can include context details here (usually coming from other services: UserService...)
    const name = error.name || null;
    const appId = 'TestApp';
    const user = 'TestUser';
    const time = new Date().getTime();
    const id = `${appId}-${user}-${time}`;
    const location = this.injector.get(LocationStrategy);
    const url = location instanceof PathLocationStrategy ? location.path() : '';
    const status = error.status || null;
    const message = error.message || error.toString();
    const stack = error instanceof HttpErrorResponse ? null : StackTraceParser.parse(error);

    const errorWithContext = { name, appId, user, time, id, url, status, message, stack };
    return errorWithContext;
  }

}
