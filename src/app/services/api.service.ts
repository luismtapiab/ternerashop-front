import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';
import { environment } from '../../environments/environment'

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
        if(response.ok)
            console.log("ok");
        else
            console.log("not ok");
        status = response.ok;
      })
      .catch((error) => {
        console.log("error");
        status = false;
      })
    return status;

  }
  
  async getProducts() : Promise<Product[]>{
    const data = await fetch(`${this.url}/product/`);
    return await data.json() ?? [];
  }

  APISTATUS = {
    UNKNOWN: "",
    LOADING: "LOADING",
    ALIVE: "ALIVE",
    DOWN: "DOWN"    
  }
}
