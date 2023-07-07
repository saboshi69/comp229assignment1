import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Business {
  _id: any;
  name: string;
  phone: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class BusinessService {
  // api endpoint
  private apiUrl = `${environment.apiUrl}/business`;

  constructor(private http: HttpClient) {}

  getBusinesses(): Observable<Business[]> {
    return this.http.get<Business[]>(this.apiUrl);
  }

  getBusiness(id: string): Observable<Business> {
    return this.http.get<Business>(`${this.apiUrl}/${id}`);
  }

  createBusiness(business: Business): Observable<Business> {
    return this.http.post<Business>(this.apiUrl, business);
  }

  updateBusiness(id: string, business: Business): Observable<Business> {
    return this.http.put<Business>(`${this.apiUrl}/${id}`, business);
  }

  deleteBusiness(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
