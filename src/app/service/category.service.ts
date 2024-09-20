import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Category } from '../models/category.model';
import { environment } from '../environments/environment'; 



@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  constructor(private http: HttpClient) {}

  getCategories(): Observable< Category[]> {
    console.log('servive getCategories :>> ');
    return this.http.get<Category[]>(`${environment.API_URL}/category`);
  }

}
