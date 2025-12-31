import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private API = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  login(login: string, password: string) {
    return this.http
      .post<{ token: string }>(`${this.API}/auth/login`, {
        login,
        password
      })
      .pipe(
        tap(res => sessionStorage.setItem('token', res.token)) // 👈 AQUI
      );
  }

  getToken() {
    return sessionStorage.getItem('token'); // 👈 AQUI
  }

  logout() {
    sessionStorage.clear(); // 👈 LIMPA TUDO
  }

  isAuthenticated() {
    return !!this.getToken();
  }
}
