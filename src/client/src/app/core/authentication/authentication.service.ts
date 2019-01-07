import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationModel } from './authentication.model';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment'


export interface Credentials {
  // Customize received credentials here
  user: AuthenticationModel;
  token: string;
}

export interface LoginContext {
  email: string;
  password: string;
}

const credentialsKey = 'credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _credentials: Credentials | null;

  constructor(private http: HttpClient) {
    const savedCredentials = sessionStorage.getItem(credentialsKey) || localStorage.getItem(credentialsKey);
    if (savedCredentials) {
      this._credentials = JSON.parse(savedCredentials);
    }
  }
  logout(): Observable<boolean> {
    // Customize credentials invalidation here
    this.setCredentials();
    return of(true);
  }

  login(context: LoginContext): Observable<Credentials> {
    // Replace by proper authentication call
    return this.http.post<any>(environment.API_URL + '/auth/login', { email: context.email, password: context.password })
      .pipe(map(res => {
        // login successful if there's a jwt token in the response
        if (res && res.data.token) {
          let user = {
            token: res.data.token,
            email: res.data.user.email,
          }
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          // localStorage.setItem('currentUser', JSON.stringify(user));
          this.setCredentials(res.data);
        }
        return res.data;
      }
      ));
  }

  private setCredentials(credentials?: Credentials) {
    this._credentials = credentials || null;
    if (credentials) {
      const storage = localStorage;
      storage.setItem(credentialsKey, JSON.stringify(credentials));
    } else {
      sessionStorage.removeItem(credentialsKey);
      localStorage.removeItem(credentialsKey);
    }
  }

  public getToken(): string | null {
    return (this._credentials) ? this._credentials.token : null;
  }

  public isAuthenticated(): boolean {
    return !!this._credentials;
  }

  public getloggedInUser() {
    return (this._credentials) ? this._credentials.user : null;
  }

}
