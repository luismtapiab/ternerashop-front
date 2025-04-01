import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';
import {toast} from 'ngx-sonner'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  show: Boolean;
  cart = signal<Product[]>([]);
  
  addToCart(product: Product) {
    if(product.stock){
        this.cart.set([...this.cart(), product])
    }
    else{
       toast.warning("This item is out of storage")
    }
  }

  remove(product: Product) {
    const index = this.cart().findIndex((p) => p===product)
    if(index!==-1){
        this.cart.set([...this.cart().slice(0, index), ...this.cart().slice(index + 1)])
    }
  }

  constructor() { 
    this.show = environment.showCart;
  }
}
