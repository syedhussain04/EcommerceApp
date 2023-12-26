import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../Models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl = "http://localhost:8080/"

  constructor(private http: HttpClient) { }

  register(data:any)
  {
    return this.http.post<Customer>(this.baseUrl + "customer/add-customer", data);
  }

}
