import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { decimal2 } from '../../../../utils';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-order-summary',
  imports: [PrimaryButtonComponent, RouterLink],
  template: `
    <div class="summary flex-col">
        
        <div> 
        <p class=text2>Total: <strong>{{total()}} $</strong></p>
        <app-primary-button  label="Proceed to checkout" routerLink="/pay"/>
        </div>
    </div>
  `,
  styles: `
    .summary{
        background: black;
        right: 10px;
        color: white;
        right: 20px;
        justify-content: center;
        top: 4em;
        border-radius: 30px;
        padding: 6px 20px;
        align-items: center;
        gap: 5px;
    }
    .text2 {
        font-size: x-large;
    }
  `
})
export class OrderSummaryComponent {
    cartService = inject(CartService)

    total = computed(() => {
        let total = 0;
        for(const item of this.cartService.cart()) {
            total += item.price;
        }
        return total>0 ? decimal2(total): "0";
    })
}
