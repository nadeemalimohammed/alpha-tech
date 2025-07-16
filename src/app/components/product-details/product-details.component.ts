import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { WishlistService } from '../../services/wishlist.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {
  product?: Product;
  showAddedCart = false;
  showAddedWishlist = false;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private wishlistService: WishlistService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProductById(id);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.showAddedCart = true;
    setTimeout(() => this.showAddedCart = false, 3000);
  }

  addToWishlist(product: Product) {
    this.wishlistService.addToWishlist(product);
    this.showAddedWishlist = true;
    setTimeout(() => this.showAddedWishlist = false, 3000);
  }
}