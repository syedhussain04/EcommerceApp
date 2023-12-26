import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/Models/category';
import { OrderItem } from 'src/app/Models/orderItem';
import { CategoryService } from 'src/app/Services/category.service';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  testVar:Boolean = false;
  category !: string;
  categories !: Category[];
  orderItems !: OrderItem[];

  constructor(private shared : SharedService, private categoryService : CategoryService, private router : Router) { 
    // force route reload whenever params change;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
   this.categoryService.getAllCategories().subscribe(res => {this.categories = res;
   console.log("categories",this.categories);});
  }
  
  OpenMenu(){
    this.testVar =!this.testVar;
    console.log(this.testVar);
  }

  submitCategory(value: any){
    console.log("chosed category :",value);
   // this.shared.setCategory(value);
    this.router.navigateByUrl("/products/"+value);
  }

  shoppingCart(){
    this.orderItems = this.shared.getOrderItems();
    console.log("###",this.orderItems);
  }
  /*
  goToContact()
  {
    location.href='#target';
  }
  */
}
