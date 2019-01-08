import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ApiService} from "../core/services";

@Injectable()
export class AuthorService {

  private AUTHOR_PATH = "/author";

  constructor(private apiService: ApiService) {

  }


  getAll(): Observable<any> {
    return this.apiService.get(this.AUTHOR_PATH);
  }

  getById(id): Observable<any> {
    return this.apiService.get(this.AUTHOR_PATH, id);
  }

  create(): Observable<any> {
    return this.apiService.post(this.AUTHOR_PATH)
  }

  delete(): Observable<any> {
    return this.apiService.post(this.AUTHOR_PATH)
  }
}
