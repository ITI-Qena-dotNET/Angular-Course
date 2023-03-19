import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList: IProduct[];

  constructor() {
    this.productList = [
      { id: 1, name: "Samsung", price: 12000, quantity: 2, categoryId: 1, imageUrl: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { id: 5, name: "IPhone", price: 45000, quantity: 1, categoryId: 1, imageUrl: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { id: 14, name: "Dell", price: 36200, quantity: 1, categoryId: 2, imageUrl: "https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { id: 33, name: "HP", price: 45000, quantity: 1, categoryId: 2, imageUrl: "https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { id: 36, name: "LG", price: 55000, quantity: 6, categoryId: 3, imageUrl: "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { id: 24, name: "Tornado", price: 13600, quantity: 4, categoryId: 3, imageUrl: "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
    ];
  }

  getAllProducts(): IProduct[] {
    return this.productList;
  }
  
  getProductsByCatID(catid: number): IProduct[] {
    if (catid == 0) {
      return this.getAllProducts();
    }
    else {
      return this.productList.filter(prd => prd.categoryId == catid)
    }
  }

  getProductByID(prodId: number): IProduct | undefined {
    return this.productList.find(prd => prd.id == prodId)
  }


}
