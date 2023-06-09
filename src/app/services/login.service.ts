import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loginUrl = `${environment.apiUrl}/user`;
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post<any>(this.loginUrl, { username, password }).pipe(
      tap((data) => {
        if (data.success) {
          localStorage.setItem('token', data.jwtBearerToken);
        }
      })
    );
  }

  isLoggedIn(): boolean {
    // Check if JWT token exists
    const jwtToken = localStorage.getItem('token');
    return !!jwtToken;
  }
}
