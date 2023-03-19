import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { CategoryApiService } from 'src/app/Services/category-api.service';
import { ProductApiService } from 'src/app/Services/product-api.service';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {
  product: IProduct = {} as IProduct;
  catList: ICategory[] = [];

  currentProdID: number = 0;

  constructor(private activatedRoute: ActivatedRoute, private productApiService: ProductApiService, private categoryApiService: CategoryApiService, private router: Router) {
    categoryApiService.getAllCategories().subscribe(data => {
      this.catList = data;
    })
  }
  
  ngOnInit(): void {
    this.currentProdID = this.activatedRoute.snapshot.paramMap.get('prodId')
      ? Number(this.activatedRoute.snapshot.paramMap.get('prodId')) : 0;

    this.productApiService.getProductByID(this.currentProdID).subscribe(data => {
      this.product = data;
    });
  }

  addNew() {
    if (this.product.id != 0) {
      this.productApiService.updateExistingProduct(this.product).subscribe({
        next: (product) => {
          console.log("Product after update: " + product);
          this.router.navigate(['/Order']);
        },
        error: (err) => {
          console.error(err.message);
        }
      })

      return;
    }

    this.productApiService.addNewProduct(this.product).subscribe({
      next: (product) => {
        this.router.navigate(['/Order']);
      },
      error: (error) => {
        console.error(error.message);
      }
    })
  }
}
