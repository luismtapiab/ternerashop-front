import { Component, computed, inject, input, signal } from '@angular/core';
import { Product } from '../../../models/product.model';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";
import { CartService } from '../../../services/cart.service';
import { decimal2 } from '../../../../utils';
import { environment } from '../../../../environments/environment';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent,RouterLink],
  template: `
    
        <div class="card" [routerLink]="['/product', product().id]"
          [state]="{ justProduct : product()}">
            <img src={{product().image}} />
        <div class="details">
            <p class="name">{{product().name}}</p>
            <p class="price">{{priceString()}} Bs</p>
        </div>
        
        @if (cartService.show) {
            <app-primary-button label="Add to Cart" (btnClicked)="cartService.addToCart(product())"/>
        }
        
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
    min-width: 130px;
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
    margin-right: 16px;
    
    text-align: right;
    font-weight: bold;
    padding: .5em 0.2em;
    border-radius: 1em;
  }
  `
})
export class ProductCardComponent {
  cartService = inject(CartService)
  product = input.required<Product>()
  priceString = computed(()=>decimal2(this.product().price))
}
