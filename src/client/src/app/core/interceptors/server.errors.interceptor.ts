import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/catch';

import { ErrorsService } from '../errors/errors.service';

@Injectable()
export class ServerErrorsInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private errorsService: ErrorsService,
  ) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).catch(err => {
      // onError
      if (err instanceof HttpErrorResponse) {

        if (err.status === 401) {
          // 401 unauthorised user, redirect the user to login page         
          this.errorsService.log(err).subscribe(
            (errorWithContext) => {
              return this.router.navigate(['/error'], { queryParams: errorWithContext })
            }
          )
        }
      }
      return Observable.of(err);
    }).retry(3);
  }
}

