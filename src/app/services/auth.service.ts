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
    const { email, password } = user;
    const username = email;

    return this._http.post<User>(`${this.baseUrl}/users/authenticate`, { username, password });
  }
}