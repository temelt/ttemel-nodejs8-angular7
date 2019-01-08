import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ApiService} from "../core/services";

@Injectable()
export class BookService {

  private BOOK_PATH = "/book";

  constructor(private apiService: ApiService) {

  }


  getAll(): Observable<any> {
    return this.apiService.get(this.BOOK_PATH);
  }

  getById(id): Observable<any> {
    return this.apiService.get(this.BOOK_PATH, id);
  }

  create(): Observable<any> {
    return this.apiService.post(this.BOOK_PATH)
  }

  delete(): Observable<any> {
    return this.apiService.post(this.BOOK_PATH)
  }
}
