import { Component } from '@angular/core';
import { CartItem } from 'src/app/Models/cart-item';
import { ICategory } from 'src/app/Models/icategory';

@Component({
  selector: 'app-order-parent',
  templateUrl: './order-parent.component.html',
  styleUrls: ['./order-parent.component.css']
})
export class OrderParentComponent {
  selectedCatId: number = 0;
  catList: ICategory[];
  totalPriceChanged: number = 0;

  cartList: CartItem[] = [];

  constructor() {
    this.catList = [
      { id: 1, name: "Laptops" },
      { id: 2, name: "Mobiles" },
      { id: 3, name: "Appliances" }
    ];
  }

  totalPrice(total: number) {
    this.totalPriceChanged = total;
  }

  addnewCartItem(newItem: CartItem) {
    this.cartList.push(newItem);
  }

  removeItemFromCart(item: CartItem) {
    let indexToRemove = this.cartList.indexOf(item, 0);

    if (indexToRemove > -1) {
      this.cartList.splice(indexToRemove, 1);
    }
  }
}
