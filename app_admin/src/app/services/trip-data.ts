import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripData {
  private apiBaseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  public getTrips(): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}/trips`);
  }

  public addTrip(formData: any): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/trips`, formData);
  }

  public getTrip(tripCode: string): Observable<any> {
    return this.http.get(
      `${this.apiBaseUrl}/trips/${tripCode}`
    );
  }

  public updateTrip(
    tripCode: string,
    formData: any
  ): Observable<any> {
    return this.http.put(
      `${this.apiBaseUrl}/trips/${tripCode}`,
      formData
    );
  }
  public deleteTrip(tripCode: string): Observable<any> {
  return this.http.delete(
    `${this.apiBaseUrl}/trips/${tripCode}`
  );
}
}