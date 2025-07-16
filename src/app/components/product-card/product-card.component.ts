import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-product-card',
  standalone: false,
  templateUrl: './product-card.component.html'
})
export class ProductCardComponent {
  @Input() product!: Product;
  showAdded = false;
  constructor(
    private cartService: CartService,
    private wishlistService: WishlistService
  ) { }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.showAdded = true;
    setTimeout(() => this.showAdded = false, 3000);
  }
  addToWishlist(product: Product) {
    this.wishlistService.addToWishlist(product);
  }
}
