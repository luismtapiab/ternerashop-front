import { Component, computed, inject, input } from '@angular/core';
import { Product } from '../../../models/product.model';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";
import { CartService } from '../../../services/cart.service';
import { ButtonComponent } from "../../../components/button/button.component";
import { decimal2 } from '../../../../utils'; 
@Component({
  selector: 'app-cart-item',
  imports: [ButtonComponent],
  template: `
    <li class="card"> 
            <img src={{item().image}} height="100" />

            <div class="details">
                <p class="name">{{item().name}}</p>
                <p class="price">{{priceString()}}</p>
    
            </div>
            <app-button label="Remove" (btnClicked)="cartService.remove(item())"/>
                
        </li>
  `,
  styles: `
    .card {
        display: flex;
        border-radius: 30px;
        padding: 6px 20px;
        justify-content: space-between;

        align-items: center;
        gap: 5px;
    }
  `
})
export class CartItemComponent {
[x: string]: any;
    cartService = inject(CartService)
    item = input.required<Product>()
    priceString =  computed(()=> decimal2(this.item().price))
    
}
