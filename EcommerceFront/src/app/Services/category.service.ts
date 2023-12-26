import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../Models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl="http://localhost:8080"

  constructor(private http:HttpClient) { }

  getAllCategories():Observable<Category[]>
  {
    return this.http.get<Category[]>(this.baseUrl + "/category/get-categories");
  }
}
