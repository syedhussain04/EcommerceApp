import { Component, OnInit } from '@angular/core';
import { OrderItem } from 'src/app/Models/orderItem';
import { OrderService } from 'src/app/Services/order.service';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  orderItems !: OrderItem[];
  subTotalSum !: number;
  ShippingPrice: number = 7;
  Total !:Number;

  constructor(private shared : SharedService , private orderService : OrderService) { }

  ngOnInit(): void {
    this.subTotalSum = this.shared.getSubTotalSum();
    this.computeTotal();
    this.orderItems = this.shared.getOrderItems();
  }

  computeTotal(){
    this.Total = this.ShippingPrice + this.subTotalSum;
  }

  postOrder(){
    console.log("check",this.orderItems);
    this.orderItems.forEach(o => {o.product.image = ''});
    this.orderService.submitOrder(this.orderItems).subscribe(
      res => console.log(res)
    );
  }

}
