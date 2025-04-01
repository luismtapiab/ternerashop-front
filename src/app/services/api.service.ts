import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';
import { environment } from '../../environments/environment'
import { Group } from '../models/group.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = environment.apiUrl;

  constructor() { }

  async checkHealth()  {
    let status = false;
    await fetch(`${this.url}/health/`)
      .then((response) => {
        status = response.ok;
      })
      .catch((error) => {
        console.log("error:",error);
        status = false;
      })
    return status;

  }
  
  async getProducts() : Promise<Product[]>{
    const data = await fetch(`${this.url}/product/`);
    
    // TODO: remove mocked data
    return [...this.beers, ...await data.json() ?? []];
  }

  async getGroups() : Promise<Group[]> {
    return new Promise((resolve, _ ) => {
        setTimeout(() => {
          resolve(this.groupsActive);
        }, 100);
      });
  }

  APISTATUS = {
    UNKNOWN: "",
    LOADING: "LOADING",
    ALIVE: "ALIVE",
    DOWN: "DOWN"    
  }

  // TODO: remove mocked data
  beers = [
    {
      "id": 1001,
      "name": "Paceña",
      "image": "https://www.cerveza-pacena.com/sites/g/files/wnfebl10741/files/styles/webp/public/Pace%C3%B1a/Home/620.png.webp?itok=Dqx-UQMi",
      "price": 22.50,
      "stock": 100
    },
    {
      "id": 1002,
      "name": "Huari",
      "image": "https://amarket.com.bo/cdn/shop/files/7772106009043_669x669.jpg?v=1740750646",
      "price": 23.00,
      "stock": 80
    },
    {
      "id": 1003,
      "name": "Taquiña",
      "image": "data:image/jpeg;base64,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",
      "price": 22.75,
      "stock": 90
    },
    {
      "id": 1005,
      "name": "Amstel",
      "image": "https://amarket.com.bo/cdn/shop/files/7772115424141_669x669.jpg?v=1741797978",
      "price": 12.90,
      "stock": 60
    }
  ]
  

  groupsActive:Group[] = [ {
        id: 1,
        product: {
            "id": 1001,
            "name": "Paceña",
            "image": "https://www.cerveza-pacena.com/sites/g/files/wnfebl10741/files/styles/webp/public/Pace%C3%B1a/Home/620.png.webp?itok=Dqx-UQMi",
            "price": 22.50,
            "stock": 100
        },
        isActive: true,
        createdAt: "2025-03-25",
        endsAt: "2025-03-31T12:00:00Z"
    },{
        id: 2,
        product: {
            "id": 1002,
            "name": "Huari",
            "image": "https://amarket.com.bo/cdn/shop/files/7772106009043_669x669.jpg?v=1740750646",
            "price": 23.00,
            "stock": 80
        },
        isActive: true,
        createdAt: "2025-03-25",
        endsAt: "2025-03-31T12:00:00Z"
    }

  ]
  
}
