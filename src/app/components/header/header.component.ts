import { Component, inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { toast } from 'ngx-sonner';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, RouterLink],
  template: `
    <div class="header">
      <button class='homebutton' routerLink="/" >TerneraShop</button>
      @if (isAlive()===this.api.APISTATUS.LOADING) {
        <strong> CARGANDO </strong>
      }
     
      @if (cartService.show) {
        <app-primary-button 
            [label]="'Carro ('+ cartService.cart().length +')'" 
            routerLink="/cart"
        />
        <button (click)="cartService.show=false;" >Cerrar Sesión</button>
      } @else {
        <button (click)="cartService.show=true;" >Iniciar Sesión</button>
      }
    </div>

      @if (isAlive()===this.api.APISTATUS.DOWN) {
        <h3> CATALOGO NO DISPONIBLE :( </h3>
      }
  `,
  styles: `
  .header {
    position: sticky;
    top: 0px;
    background: rgba(0,0,0,.40);
    color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
    box-shadow: 2px 2px 2px 2px #000000;
    margin-bottom: 20px;
    z-index: 100;
  }
  
  `
})
export class HeaderComponent {
    
    cartService = inject(CartService);
    api = inject(ApiService);
    isAlive = signal(this.api.APISTATUS.UNKNOWN);
    async ngOnInit(){
        this.isAlive.set( this.api.APISTATUS.LOADING);           
        const alive = await this.api.checkHealth();
        
        if(alive === null || alive === false) {
            this.isAlive.set( this.api.APISTATUS.DOWN);
            toast.error("Error al conectar con el servidor");
        }
        else {
            this.isAlive.set( this.api.APISTATUS.ALIVE);           
        } 
    }
}



