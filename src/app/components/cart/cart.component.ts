import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
  }

  removeItem(id: number) {
    this.cartService.removeItem(id);
    this.cartItems = this.cartService.getItems();
  }

  checkout(): void {
    this.router.navigate(['/checkout']);
  }
}
