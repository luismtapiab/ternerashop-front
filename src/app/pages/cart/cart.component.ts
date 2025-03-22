import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItemComponent } from "./cart-item/cart-item.component";
import { OrderSummaryComponent } from "./order-summary/order-summary.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent, OrderSummaryComponent, RouterLink],
  template: `
  <h2 class="title">Shopping Cart</h2>
  <ul class="productsCart">
  @if(cartService.cart().length == 0){
    <p class="noitems"> There aren't items here yet <br> 
    <button class="homebutton" routerLink="/"> continue shopping</button></p>
  } 
  @else {
    @for(item of cartService.cart(); track item.id) {
        <app-cart-item [item]="item"/>
    }
  }
  </ul>
  <app-order-summary />
  
  `,
  styles: `
    .title {
        font-size: xx-large;
        color: white;
        padding: 0 20px;
    }
    .noitems {
        font-size: x-large;
        justify-self: center;
    } 
    .productsCart {
        padding-left: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr) );
        gap: 15px; 
        justify-content: space-around;
        

    }
  `
})
export class CartComponent {
  cartService = inject(CartService)
}
