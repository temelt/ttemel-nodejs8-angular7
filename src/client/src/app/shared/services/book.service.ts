import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';
import {ApiService, NotificationService} from "../../core/services/index";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private BOOK_PATH = "/book";

  constructor(private apiService: ApiService, private notificationService: NotificationService) {

  }


  getAll(): Observable<any> {
    return this.apiService.get(this.BOOK_PATH).pipe(map(response => {
      if (response) {
        return response;
      } else {
        this.notificationService.notifyError(response ? response : 'Failed to Fetch Book List');
        return {};
      }
    }));
  }

  getById(id): Observable<any> {
    return this.apiService.get(this.BOOK_PATH, id).pipe(map(response => {
      if (response) {
        return response;
      } else {
        this.notificationService.notifyError(response ? response : 'Failed to Fetch Book');
        return {};
      }
    }));
  }

  create(book): Observable<any> {
    return this.apiService.post(this.BOOK_PATH, book).pipe(map(response => {
      if (response) {
        return response;
      } else {
        this.notificationService.notifyError(response ? response : 'Failed to Create Book');
        return {};
      }
    }));
  }

  delete(): Observable<any> {
    return this.apiService.post(this.BOOK_PATH)
  }
}
