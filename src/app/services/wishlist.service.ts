import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class WishlistService {
  private items: Product[] = [];

  addToWishlist(product: Product) {
    if (!this.items.find(p => p.id === product.id)) {
      this.items.push(product);
    }
  }

  getWishlistItems(): Product[] {
    return this.items;
  }

  removeFromWishlist(productId: number) {
    this.items = this.items.filter(p => p.id !== productId);
  }

  clearWishlist() {
    this.items = [];
  }
}