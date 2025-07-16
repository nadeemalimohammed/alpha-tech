import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];

  getItems(): any[] {
    return this.cartItems;
  }


  addToCart(product: Product): void {
    this.cartItems.push(product);
  }

  removeItem(id: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== id);
  }

  clearCart() {
    this.cartItems = [];
  }

}
