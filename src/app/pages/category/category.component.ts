import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.component.html'
})
export class CategoryComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  sortOrder: string = '';
  private routeSubscription: Subscription = new Subscription();

  constructor(public route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(): void {
    this.routeSubscription = this.route.paramMap.subscribe(params => {
      const category = params.get('category') || '';
      this.products = this.productService.getProductsByCategory(category);
      this.sortOrder = '';
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

  sortProducts(order: string) {
    this.sortOrder = order;
    this.products = this.productService.sortProducts(this.products, order);
  }
}