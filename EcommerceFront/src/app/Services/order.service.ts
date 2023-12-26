import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderItem } from '../Models/orderItem';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseUrl ="http://localhost:8080"

  constructor(private http:HttpClient) { }

  submitOrder(order : any){
    return this.http.post<OrderItem[]>( this.baseUrl + "/order/add-order", order);
  }
}
