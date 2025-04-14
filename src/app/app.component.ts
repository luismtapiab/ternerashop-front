import { Component, inject, signal, ɵtriggerResourceLoading } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NgxSonnerToaster } from 'ngx-sonner'
import { ApiService } from './services/api.service';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet, NgxSonnerToaster],
  template: `
    <ngx-sonner-toaster 
      position="top-center" richColors
      [expand]="true"
      visibleToasts="3"  
      closeButton="close"
      duration="5000"
      offset="100px" 
    />
    <app-header/>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'TerneraShop';
}