import { Component } from '@angular/core';
import { WishlistService } from '../../services/wishlist.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-wishlist',
  standalone: false,
  templateUrl: './wishlist.component.html'
})
export class WishlistComponent {
  wishlistItems: Product[];

  constructor(private wishlistService: WishlistService) {
    this.wishlistItems = wishlistService.getWishlistItems();
  }

  removeItem(id: number) {
    this.wishlistService.removeFromWishlist(id);
    this.wishlistItems = this.wishlistService.getWishlistItems();
  }
}