import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Authentication {
  private apiBaseUrl = 'http://localhost:3000/api';
  private tokenKey = 'travlr-token';

  constructor(private http: HttpClient) {}

  public getToken(): string {
    return localStorage.getItem(this.tokenKey) || '';
  }

  public saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  public logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  public isLoggedIn(): boolean {
    const token = this.getToken();

    if (!token) {
      return false;
    }

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));

      return payload.exp > Date.now() / 1000;
    } catch {
      return false;
    }
  }

  public login(email: string, password: string): Observable<any> {
    return this.http.post<any>(
      `${this.apiBaseUrl}/login`,
      {
        email,
        password
      }
    ).pipe(
      tap(response => {
        if (response.token) {
          this.saveToken(response.token);
        }
      })
    );
  }
}
