
import { ErrorHandler, Injectable, Injector} from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import * as StackTraceParser from 'error-stack-parser';

import { ErrorsService } from './errors.service';
import { NotificationService } from '../services/notification.service';

@Injectable()
export class ErrorsHandler implements ErrorHandler {
  constructor(
    private injector: Injector,
  ) {}

  handleError(error: Error | HttpErrorResponse) {
    const notificationService = this.injector.get(NotificationService);
    const errorsService = this.injector.get(ErrorsService);
    const router = this.injector.get(Router);

    if (error instanceof HttpErrorResponse) {
    // Server error happened
      if (!navigator.onLine) {
        // No Internet connection
        return notificationService.notifyError('No Internet Connection');
      }
      errorsService.log(error);
      return notificationService.notifyError(`${error.status} - ${error.message}`);
    } else {
      errorsService.log(error);
    }
  }
}

