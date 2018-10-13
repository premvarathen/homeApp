import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
     user: any;
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
      console.log('inside login service');
      if ( username === 'prem' && password === 'test')
    // tslint:disable-next-line:one-line
    {
      this.user  = { username: username, password: password};
      localStorage.setItem('currentUser', JSON.stringify(this.user));
      return of(this.user);
    }
        // return this.http.post<any>(`${config.apiUrl}/users/authenticate`, { username: username, password: password })
        //     .pipe(map(user => {
        //         // login successful if there's a jwt token in the response
        //         if (user && user.token) {
        //             // store user details and jwt token in local storage to keep user logged in between page refreshes
        //             localStorage.setItem('currentUser', JSON.stringify(user));
        //         }

        //         return user;
        //     }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
