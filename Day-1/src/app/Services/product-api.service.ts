import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  httpHeader = {};

  constructor(private httpClient: HttpClient) { 
    this.httpHeader = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    };
  }

  getAllProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${environment.APIURL}/products`);
  }

  getProductsByCatID(catid: number): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${environment.APIURL}/products?catId=${catid}`);
  }

  getProductByID(prodId: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(`${environment.APIURL}/products/${prodId}`);
  }

  addNewProduct(prd: IProduct): Observable<IProduct> {
    return this.httpClient.post<IProduct>(`${environment.APIURL}/products`, JSON.stringify(prd), this.httpHeader);
  }

  updateExistingProduct(prd: IProduct): Observable<IProduct> {
    return this.httpClient.put<IProduct>(`${environment.APIURL}/products`, JSON.stringify(prd), this.httpHeader);
  }

  deleteProductByID(prodId: number): Observable<IProduct> {
    return this.httpClient.delete<IProduct>(`${environment.APIURL}/products/${prodId}`);
  }
}
