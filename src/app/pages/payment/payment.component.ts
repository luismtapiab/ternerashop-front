import { Component, inject } from '@angular/core';
import { OrderSummaryComponent } from "../cart/order-summary/order-summary.component";
import { CartItemComponent } from "../cart/cart-item/cart-item.component";
import { CartService } from '../../services/cart.service';
import { PrimaryButtonComponent } from "../../components/primary-button/primary-button.component";

@Component({
  selector: 'app-payment',
  imports: [OrderSummaryComponent, CartItemComponent, PrimaryButtonComponent],
  template: `
    
    <div class="right">
    <ul class="productsCart">
  
    @for(item of cartService.cart(); track item.id) {
        <app-cart-item [item]="item"/>
    }
  
    </ul>
    <app-order-summary />
    </div>
    <div class="left">
      <form>
        <h2>Detalles del pago</h2>
        <fieldset>
        <label for="fname">Nombres:</label>
        <input type="text" id="fname" name="fname" value="Carlos"><br>
        
        <label for="lname">Appellidos:</label>
        <input type="text" id="lname" name="lname" value="Duty"><br><br>
        </fieldset>
        
        
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
