import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ToastrService } from 'ngx-toastr';

import 'rxjs/add/operator/publish';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private _notification: BehaviorSubject<string> = new BehaviorSubject(null);
  readonly notification$: Observable<string> = this._notification.asObservable().publish().refCount();
  private notificationConfig: {}
  constructor(
    public toastr: ToastrService
  ) {
    this.notificationConfig = {
      enableHtml: true,
      closeButton:true 
    }
  }

  notifySuccess(m) {
    setTimeout(() => this.toastr.success(m, 'Success', this.notificationConfig));
  }

  notifyError(m) {
    setTimeout(() => this.toastr.error(m, 'Error', this.notificationConfig));
  }

  notifyWarning(m) {
    setTimeout(() => this.toastr.warning(m, 'warning', this.notificationConfig));
  }

  notifyInfo(m) {
    setTimeout(() => this.toastr.info(m, 'Info', this.notificationConfig));
  }
}
