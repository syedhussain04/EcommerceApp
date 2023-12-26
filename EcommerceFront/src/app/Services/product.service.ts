import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl ="http://localhost:8080"

  constructor(private http:HttpClient) { }

  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>( this.baseUrl + "/product/get-products");
  }
  getProductsByCat(cat:any):Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl + "/product/get-product-cat/"+ cat);
  }
  getProductByName(name : any):Observable<Product>{
    return this.http.get<Product>( this.baseUrl + "/product/get-product-name/"+ name);
  }
  getProductById(id : any){
    return this.http.get<Product>( this.baseUrl +"/product/get-product-id/"+ id);
  }
  getRandomProducts(){
    return this.http.get<Product[]>( this.baseUrl + "/product/get-random-products");
  }
}
