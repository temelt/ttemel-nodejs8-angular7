
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
      // Http Error
      // Send the error to the server
      errorsService.log(error).subscribe();
      // Show notification to the user
      return notificationService.notifyError(`${error.status} - ${error.message}`);
    } else {
      // Client Error Happend
      // Send the error to the server and then
      // redirect the user to the page with all the info
      errorsService
          .log(error)
          .subscribe(errorWithContextInfo => {
            router.navigate(['/error'], { queryParams: errorWithContextInfo });
          });
    }
  }
}

