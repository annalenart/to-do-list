import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Categories, CategoryCreation } from '../utils/models/nav';

@Injectable({
  providedIn: 'root'
})
export class NavigationProviderService {

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<Categories> {
    return this.http.get<Categories>(`${environment.apiUrl}/categories`);
  }

  addCategory(category: CategoryCreation) {
    return this.http.post(`${environment.apiUrl}/categories`, category);
  }

  deleteCategory(id: string) {
    return this.http.delete(`${environment.apiUrl}/categories/${id}`);
  }
}
