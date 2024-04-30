import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {


  private apiUrl = 'http://localhost:3000/menu'; // Replace this with your API URL

  constructor(private http: HttpClient) { }

  // Get all menu items
  getAllMenuItems(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/list');
  }

  // Get a single menu item by ID
  getMenuItemById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get/${id}`);
  }

  // Create a new menu item
  createMenuItem(menuItem: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/create', menuItem);
  }

  // Update an existing menu item
  updateMenuItem(menuItem: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${menuItem.id}`, menuItem);
  }

  // Delete a menu item by ID
  deleteMenuItem(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

}
