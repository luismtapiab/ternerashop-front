import { Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product.model';
import { JsonPipe } from '@angular/common';
import { decimal2 } from '../../../utils';

@Component({
  selector: 'app-product-detail',
  imports: [JsonPipe],
  template: `
    <h2>
      product-detail works!
    </h2>

    <strong> {{product | json}}
    </strong>

    <div class="card">
        <img src={{product().image}} />
        <div class="details">
            <p class="name">{{product().name}}</p>
            <p class="price">{{priceString()}} Bs</p>
        </div>
    </div>
  `,
  styles: ``
})
export class ProductDetailComponent {
    router = inject(Router)
    product = this.router.getCurrentNavigation()?.extras.state?.['justProduct']; 
    priceString = computed(()=>decimal2(this.product().price))
}
