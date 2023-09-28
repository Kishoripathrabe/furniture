// data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  fetchBrandsData(): Observable<any> {
    return this.http.get('assets/home1.json');
   }
  fetchCategoriesData(): Observable<any> {
   return this.http.get('assets/trendingcategories.json');
  }
}
