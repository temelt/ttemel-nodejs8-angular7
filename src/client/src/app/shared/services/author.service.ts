import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';
import {ApiService, NotificationService} from "../../core/services/index";

@Injectable()
export class AuthorService {

  private AUTHOR_PATH = "/author";

  constructor(private apiService: ApiService, private notificationService: NotificationService) {

  }

  getAll(): Observable<any> {
    return this.apiService.get(this.AUTHOR_PATH).pipe(map(response => {
      if (response) {
        return response;
      } else {
        this.notificationService.notifyError(response ? response : 'Failed to Fetch Author List');
        return {};
      }
    }));
  }

  getById(id): Observable<any> {
    return this.apiService.get(this.AUTHOR_PATH, id).pipe(map(response => {
      if (response) {
        return response;
      } else {
        this.notificationService.notifyError(response ? response : 'Failed to Fetch Author ');
        return {};
      }
    }));
  }

  create(): Observable<any> {
    return this.apiService.post(this.AUTHOR_PATH)
  }

  delete(): Observable<any> {
    return this.apiService.post(this.AUTHOR_PATH)
  }
}
