import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Services/product.service';
import {Location} from '@angular/common';
import { ProductApiService } from 'src/app/Services/product-api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  currentProdID: number = 0;
  prod: IProduct | undefined = undefined;

  constructor(private activatedRoute: ActivatedRoute, private productApiService: ProductApiService, private location: Location) { }

  ngOnInit(): void {
    this.currentProdID = this.activatedRoute.snapshot.paramMap.get('prodId')
      ? Number(this.activatedRoute.snapshot.paramMap.get('prodId')) : 0;
    
    let returnedPrd = this.productApiService.getProductByID(this.currentProdID).subscribe(data => {
      this.prod = data;
    });

    if (returnedPrd) {
      //this.prod = returnedPrd;
    }
    else{
      alert("product not found")
      this.location.back();
    }
  }

  navigateBack() {
    this.location.back();
  }

}
