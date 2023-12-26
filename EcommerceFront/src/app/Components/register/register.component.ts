import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from 'src/app/Models/customer';
import { OrderItem } from 'src/app/Models/orderItem';
import { CustomerService } from 'src/app/Services/customer.service';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted : Boolean;
  c = new Customer();

  constructor( private customerService : CustomerService) { }

  ngOnInit(): void {
  }



  onSubmit(data : any){
    this.customerService.register(data).subscribe(  
      res => {
        console.log("form", data);
      }
    )
  }

  change(){
    this.submitted = false;
  }

}
