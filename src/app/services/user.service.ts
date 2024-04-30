import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:3000'; // Replace this with your actual backend API URL

  constructor(private http: HttpClient) { }

  // Create user
  createUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/register`, user);
  }

  login(user:any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/login`, user);
  }

    // Read user by ID
  getUsers(): Observable<any> {
      return this.http.get<any>(`${this.baseUrl}/user`);
  }

  // Read user by ID
  getUserById(userId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/user/${userId}`);
  }

  // Update user
  updateUser(userId: number, user: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/user/${userId}`, user);
  }

  // Delete user
  deleteUser(userId: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/user/${userId}`);
  }
}
