import { Component, OnInit } from '@angular/core';
import { OrderItem } from 'src/app/Models/orderItem';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  orderItems !: OrderItem[];
  SubTotalArray:number[]=[];
  index!:number;
  subTotalSum!: number;
  ShippingPrice :number = 7;
  Total:number = 0;
  price!:number;
  isEmpty!: Boolean;

  constructor(private shared : SharedService) { }

  ngOnInit(): void {
    this.orderItems = this.shared.getOrderItems();
    this.isEmptyCart()
    this.shoppingCart();
  }

  shoppingCart(){
    //console.log("#***#",this.orderItems);
    this.orderItems.map(ele =>
      {
        if(ele.product.image.substring(0,23) != "data:image/jpeg;base64,")
        {ele.product.image = 'data:image/jpeg;base64,' + ele.product.image;}
      }
    );
    this.orderItems.forEach(ele => {
      this.SubTotalArray.push(ele.product.productPrice * ele.qte);
    });
    this.sumSubTotal();
    this.computeTotal();
    //console.log("array :",this.SubTotalArray);
  }

  removeProduct(id:any){
    //updated using shred service
    //cause ther is an event wich is delete click and tha updates the new values of subTotalSum and Total
    this.removeSubTotal(id);
    this.shared.removeItem(id);
    this.orderItems = this.shared.getOrderItems();
  }

  removeSubTotal(id:any){
    this.index = this.orderItems.findIndex(e => e.product.productId == id);
    this.price = this.orderItems[this.index].product.productPrice;
    //console.log(this.orderItems.findIndex(e => e.product.productId == id));
    this.SubTotalArray.splice(this.index,1);
    //console.log("filtered subtotal array",this.SubTotalArray);
    this.subTotalSum = this.subTotalSum - this.price;
    this.computeTotal();
  }
  
  sumSubTotal(){
    this.subTotalSum = this.SubTotalArray.reduce((prEle,cuEle) => prEle+cuEle, 0);
    this.shared.setSubTotalSum(this.subTotalSum);
    //console.log("Sum",this.subTotalSum);
  }
  computeTotal(){
    this.Total = this.ShippingPrice + this.subTotalSum;
  }

  isEmptyCart(){
    console.log(this.orderItems.length);
    if(this.orderItems.length == 0){
     // alert("empty");
      this.isEmpty = true;
    }
    else{
   // alert("not empty");
    this.isEmpty = false;
    }
  }
  
}
