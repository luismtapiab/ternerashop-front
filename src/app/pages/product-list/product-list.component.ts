import { Component, inject, OnInit, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from "../product-card/product-card.component";
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  template: `
    <div class="products-container">
        @for(product of products(); track product.id) {
          <app-product-card [product]="product" />
        }
    </div>
  `,
  styles: `
  .products-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 1rem;
  }
  `
})
export class ProductListComponent implements OnInit {
    api = inject(ApiService)
    products = signal<Product[]>([]);
    async ngOnInit(){
        const data = await this.api.getProducts()
        this.products.set(data)
    }
}
