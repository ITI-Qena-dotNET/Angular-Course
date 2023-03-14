import { IProduct } from "./iproduct";

export class CartItem {
    constructor(public product: IProduct, public Count: number) {
    }
}
