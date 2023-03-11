import { Component } from '@angular/core';
import { DiscountOffers } from 'src/app/Models/discount-offers';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent {
    discount: DiscountOffers = DiscountOffers.NoDiscount;
    clientName: string = "Youssef";

    product: IProduct = {
        id: 1,
        name: "Travel Bagpack",
        price: 200,
        quantity: 3,
        imageUrl: "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/89/715892/1.jpg?3518",
        categoryId: 2
    };
}
