import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.apiUrl;
  constructor(private _http: HttpClient) { }


  loginIn(user: User) {
    let { email, password } = user;
    let username = email;
    // return this._http.post<User>(`${this.baseUrl}/login`, {email, password});
    return this._http.post<User>('https://fast-plateau-82390.herokuapp.com/users/authenticate', { username, password });
  }
}