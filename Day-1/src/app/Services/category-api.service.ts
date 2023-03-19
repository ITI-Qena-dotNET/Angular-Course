import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ICategory } from '../Models/icategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryApiService {

  constructor(private httpClient: HttpClient) { }

  getAllCategories(): Observable<ICategory[]> {
    return this.httpClient.get<ICategory[]>(`${environment.APIURL}/categories`);
  }
}
