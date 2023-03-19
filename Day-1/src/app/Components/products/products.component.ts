import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/Models/cart-item';
import { DiscountOffers } from 'src/app/Models/discount-offers';
import { IProduct } from 'src/app/Models/iproduct';
import { Store } from 'src/app/Models/store';
import { ProductApiService } from 'src/app/Services/product-api.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnChanges {
    discount: DiscountOffers = DiscountOffers.NoDiscount;
    isDiscountElementShown: boolean = this.discount != DiscountOffers.NoDiscount;

    clientName: string;
    purchaseDate: Date;

    store: Store;

    @Input()
    receivedCatID: number = 0;

    prdListOfCat: IProduct[] = [];
    orderTotalPrice: number = 0;

    @Output()
    totalPriceEvent: EventEmitter<number>;

    @Output()
    newCartItemEvent: EventEmitter<CartItem>;

    constructor(private productApiService: ProductApiService, private router: Router) {
        this.store = new Store("My shop", ["Cairo", "Qena"], "https://previews.123rf.com/images/distrologo/distrologo1902/distrologo190200778/117610020-retail-store-logo-design-template-shopping-cart-logo-icon-design.jpg");
        this.clientName = "Youssef";
        this.purchaseDate = new Date();
        this.totalPriceEvent = new EventEmitter<number>();
        this.newCartItemEvent = new EventEmitter<CartItem>();
    }
    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.receivedCatID == 0) {
            this.productApiService.getAllProducts().subscribe(data => {
                this.prdListOfCat = data;
            });
        } else {
            this.productApiService.getProductsByCatID(this.receivedCatID).subscribe(data => {
                this.prdListOfCat = data;
            });
        }
    }

    async showProductDetails(prdID: number) {
        let result = await this.router.navigate(['Details', prdID]);
        console.log("Routing result is " + result ? "Success" : "Fail");
    }

    async editProductDetails(prdID: number) {
        let result = await this.router.navigate(['Admin/NewProduct', prdID]);
        console.log("Routing result is " + result ? "Success" : "Fail");
    }

    deleteProduct(prdID: number) {
        this.productApiService.deleteProductByID(prdID).subscribe(data => {
            window.location.reload()
        });
    }

    updateTotalPrice(prd: IProduct, count: any) {
        if (prd.quantity - count <= 0) {
            console.log("Count exceeds existing items...");
            return;
        }

        prd.quantity -= count;
        this.orderTotalPrice += (prd.price * count as number);
        this.totalPriceEvent.emit(this.orderTotalPrice);

        let newItem: CartItem = new CartItem(prd, count);
        this.newCartItemEvent.emit(newItem);
    }

    isLogoShown: boolean = true;

    toggleLogoVisibility() {
        this.isLogoShown = !this.isLogoShown;
    }
}
