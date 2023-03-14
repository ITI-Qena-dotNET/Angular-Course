import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CartItem } from 'src/app/Models/cart-item';
import { DiscountOffers } from 'src/app/Models/discount-offers';
import { IProduct } from 'src/app/Models/iproduct';
import { Store } from 'src/app/Models/store';

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

    productList: IProduct[];
    store: Store;

    @Input()
    receivedCatID: number = 0;

    prdListOfCat: IProduct[] = [];
    orderTotalPrice: number = 0;

    @Output()
    totalPriceEvent: EventEmitter<number>;

    @Output()
    newCartItemEvent: EventEmitter<CartItem>;

    constructor() {
        this.store = new Store("My shop", ["Cairo", "Qena"], "https://previews.123rf.com/images/distrologo/distrologo1902/distrologo190200778/117610020-retail-store-logo-design-template-shopping-cart-logo-icon-design.jpg");
        this.clientName = "Youssef";
        this.purchaseDate = new Date();
        this.totalPriceEvent = new EventEmitter<number>();
        this.newCartItemEvent = new EventEmitter<CartItem>();

        this.productList = [
            { id: 1, name: "Samsung", price: 12000, quantity: 2, categoryId: 1, imageUrl: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
            { id: 5, name: "IPhone", price: 45000, quantity: 1, categoryId: 1, imageUrl: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
            { id: 14, name: "Dell", price: 36200, quantity: 1, categoryId: 2, imageUrl: "https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
            { id: 33, name: "HP", price: 45000, quantity: 1, categoryId: 2, imageUrl: "https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
            { id: 36, name: "LG", price: 55000, quantity: 6, categoryId: 3, imageUrl: "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
            { id: 24, name: "Tornado", price: 13600, quantity: 4, categoryId: 3, imageUrl: "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
        ];
    }
    ngOnInit(): void {
        // throw new Error('Method not implemented.');
    }
    ngOnChanges(changes: SimpleChanges): void {
        this.getProductsByCatID();
    }

    getProductsByCatID() {
        if (this.receivedCatID == 0) {
            this.prdListOfCat = Array.from(this.productList);
            return;
        }

        this.prdListOfCat = this.productList.filter((prd) => prd.categoryId == this.receivedCatID);
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
