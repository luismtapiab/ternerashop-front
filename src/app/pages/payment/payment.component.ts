import { Component, inject } from '@angular/core';
import { OrderSummaryComponent } from "../cart/order-summary/order-summary.component";
import { CartItemComponent } from "../cart/cart-item/cart-item.component";
import { CartService } from '../../services/cart.service';
import { PrimaryButtonComponent } from "../../components/primary-button/primary-button.component";

@Component({
  selector: 'app-payment',
  imports: [OrderSummaryComponent, CartItemComponent, PrimaryButtonComponent],
  template: `
    <h2 class="title">Payment</h2>
    <div class="left">
    <ul class="productsCart">
  
    @for(item of cartService.cart(); track item.id) {
        <app-cart-item [item]="item"/>
    }
  
    </ul>
    <app-order-summary />
    </div>
    <div class="right">
      <form>
        <h3>Payment details</h3><br>
        <fieldset>
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname" value="John"><br>
        
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname" value="Doe"><br><br>
        </fieldset>
        
        <app-primary-button label="Pay"/>
      </form> 
    </div>
  `,
  styles: `
  div.left {
    float: left;
    width: 45%;
  }

  div.right {
    float: right;
    width: 50%;
  }
  form {
     position: relative;
  

    /* creamos nuestra malla (grid) */
    
}
  `
})
export class PaymentComponent {
    cartService = inject(CartService)
}
