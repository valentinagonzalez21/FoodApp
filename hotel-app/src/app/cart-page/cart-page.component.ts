import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart} from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
import { Router} from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{
  cart!:Cart;

  constructor(private cartService: CartService, private router:Router){
    this.setCart();
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem: CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }
 
  goToHomePage(){
    this.router.navigateByUrl('');
  }

  ngOnInit(): void {
    
  }
}
