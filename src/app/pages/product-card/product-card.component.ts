import { Component, computed, inject, input } from '@angular/core';
import { Product } from '../../models/product.model';
import { PrimaryButtonComponent } from "../../components/primary-button/primary-button.component";
import { CartService } from '../../services/cart.service';
import { decimal2 } from '../../../utils';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent],
  template: `
    <div class="card">
        <img src={{product().image}} />
    <div class="details">
        <p class="name">{{product().name}}</p>
        <p class="price">{{priceString()}} Bs</p>
    </div>
    <app-primary-button label="Add to Cart" (btnClicked)="cartService.addToCart(product())"/>
    <span class="stock" 
       [class]="product().stock ? 'text-green' : 'text-red'"> 
        @if (product().stock) {
            {{product().stock}} left
        } @else { Out of <br> stock }
    </span>
    </div>
    `,
  styles: `
  .card {
    background-color: white;
    border-radius: 30px;
    padding: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .details {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  
  .stock {
    align-self: flex-end;
    position: absolute;
    margin-right: 20px;
    text-align: right;
    font-weight: bold;
    padding: .5em;
    border-radius: 1em;
  }
  .text-green {
    background: rgba(0, 255, 0, 0.7);
  }

  .text-red {
    background: rgba(255,0,0,.7);
  }
  `
})
export class ProductCardComponent {
  
  cartService = inject(CartService)
  product = input.required<Product>()
  priceString = computed(()=>decimal2(this.product().price))
}
