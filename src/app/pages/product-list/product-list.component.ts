import { Component, inject, OnInit, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from "../product-card/product-card.component";
import { ApiService } from '../../services/api.service';
import { Group } from '../../models/group.model';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent, CardComponent],
  template: `
    <h2>Ofertas activas</h2>
    <div class="products-container">
        @for(group of groups(); track group.id) {
          <app-card [product]="group.product" />
        }
    </div>
    <h2>Nuestros Productos</h2>
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
    groups = signal<Group[]>([])
    async ngOnInit(){
        const ps = await this.api.getProducts()
        this.products.set(ps)
        
        const gs = await this.api.getGroups()
        this.groups.set(gs)
    }
}
