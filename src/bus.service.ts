import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getBuses(): Observable<any> {
    return this.http.get(`${this.apiUrl}/buses`);
  }

  getBusById(busId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/buses/${busId}`);
  }

  bookTicket(ticket: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/tickets`, ticket);
  }
}