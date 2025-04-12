import { Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { decimal2 } from '../../../utils';
import { CartService } from '../../services/cart.service';
import { PrimaryButtonComponent } from "../../components/primary-button/primary-button.component";

@Component({
  selector: 'app-product-detail',
  imports: [PrimaryButtonComponent],
  template: `
    <div class="card two-columns">
        <div class="product">
            <img src={{product.image}} />
        
        @if (cartService.show) {
            <app-primary-button label="Add to Cart" 
            (btnClicked)="this.cartService.addToCart(this.product)"/>
        }
        
        <span class="stock" 
             [class]="product.stock ? 'text-green' : 'text-red'"> 
            @if (product.stock) {
                {{product.stock}} left
            } @else { Out of <br> stock }
        </span>
        </div>
        <div>
            <h2>{{product.name}}</h2>
            <p class="price">{{priceString()}} Bs</p>
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos velit totam, nobis ut et fugiat excepturi deleniti commodi assumenda quod voluptates, facere quas, doloribus praesentium quia unde obcaecati quo illo.
            </p>
        </div>    
    </div>
  `
  ,
  styles: `
    .two-columns {
        display: grid;
        grid-template-columns: 1fr 2fr;
    }


    .product {
        display: flex;
        padding: 6px;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        flex-direction: column;
    }
    .price {
        font-size: 1.5rem;
        font-style: strong;
    }
  `
})
export class ProductDetailComponent {
    cartService = inject(CartService)
    router = inject(Router)
    product = this.router.getCurrentNavigation()?.extras.state?.['justProduct']; 
    priceString = computed(()=>decimal2(this.product.price))

}
