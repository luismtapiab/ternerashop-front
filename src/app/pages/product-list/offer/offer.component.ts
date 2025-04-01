import { Component, computed, inject, input } from '@angular/core';
import { decimal2 } from '../../../../utils';
import { Product } from '../../../models/product.model';
import { CartService } from '../../../services/cart.service';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";
import { Group } from '../../../models/group.model';

@Component({
  selector: 'app-offer',
  imports: [PrimaryButtonComponent],
  template: `
       
      <div class="card">
      <span class="text-orange">
          Esperando a {{group().purchaseGoal - group().participants}} más
      </span>
          <img src={{group().product.image}} />
      <div class="details">
          <p class="name">{{group().product.name}}</p>
          <p class="price">{{priceString()}} Bs</p>
      </div>
      @if (cartService.show) {
      <app-primary-button label="Add to Cart" (btnClicked)="cartService.addToCart(group().product)"/>
      }
      <!-- TODO: Use current time and update counter every second -->
      <span class="timeleft text-red"> 
         3:00:23
      </span>
     
      </div>
      `,
    styles: `
    .card {
      background-color: white;
      min-width: 150px;
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
  
    
    .timeleft {
      color: white;
      align-self: flex-start;
      position: absolute;
      margin-top:100px;
      text-align: right;
      font-weight: bold;
      padding: .5em;
      border-radius: 1em;
    }
    
    `
  })
  export class OfferComponent {
    
    cartService = inject(CartService)
    group = input.required<Group>()
    priceString = computed(()=>decimal2(this.group().product.price))
  }
  