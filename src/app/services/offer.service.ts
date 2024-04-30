import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  private apiUrl = 'http://localhost:3000/offer'; // Replace this with your API URL

  constructor(private http: HttpClient) { }

  createOffer(offerData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, offerData);
  }
 
  getOfferById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  getOffer(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  updateOffer(id: number, offerData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, offerData);
  }

  deleteOffer(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
