import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';
import { ApiService,NotificationService } from '../../services';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL = environment.API_URL;
  constructor(private apiHandler: ApiService,private notificationService:NotificationService) { }
  getUsers(filter: HttpParams) {
    return this.apiHandler.get('/users',filter).map(response => {
     if (response.success) {
        // this.notificationService.notifySuccess(response.message?response.message:'Users List Fetched');
        return response.result;
      } else {
        this.notificationService.notifyError(response.message?response.message:'Failed to Fetch User List');
        return {};
      }
    }).catch(this.handleError);
  }
  private handleError(error: | any) {
    console.error(error);
    // return Observable.throw(error); // <= B
    return Observable.of(error.error);
  }
}
