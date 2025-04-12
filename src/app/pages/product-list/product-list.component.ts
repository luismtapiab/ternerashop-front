import { Component, inject, OnInit, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from "./product-card/product-card.component";
import { ApiService } from '../../services/api.service';
import * as lodash from 'lodash'

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  template: `
    <h2>Ofertas activas</h2>
    <div class="products-container">
        @for(product of products()['offers']; track product.id) {
          <app-product-card [product]="product" />
        }
    </div>
    <h2>Nuestros Productos</h2>
    <div class="products-container">
        @for(product of products()['regulars']; track product.id) {
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
    products = signal<lodash.Dictionary<Product[]>>({});
    
    async ngOnInit(){
        const ps = await this.api.getProducts()
        const predicate = (p:Product) => {
            if(p.group) return 'offers';
            return 'regulars';
        }
        this.products.set(lodash.groupBy(ps, predicate));

    }
}
