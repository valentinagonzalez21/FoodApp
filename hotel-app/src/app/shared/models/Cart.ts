import { CartItem } from "./CartItem";

export class Cart{
    items:CartItem[]=[];

    get totalPrice():number{
        let totalPrice=0;
        this.items.forEach(item =>{
            totalPrice += item.getPrice();
        });
        return totalPrice;
    }

    get totalQuantity():number{
        let totalQuantity = 0;
        this.items.forEach(item => {
            totalQuantity += item.getQuantity();
        });
        return totalQuantity;
    }
}