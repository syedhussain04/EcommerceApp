import { Injectable } from '@angular/core';
import { OrderItem } from '../Models/orderItem';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  category !: string;
  OrderItems : OrderItem[]=[];
  wishList : Product[] = [];
  index:any;
  subTotalSum : number;

  constructor() { }

  setCategory(data:string){
    this.category = data;
  }
  getCategoty():string{
    return this.category;
  }

  addOrderItem(data:OrderItem){
    this.OrderItems.push(data);
  }

  getOrderItems():OrderItem[]{
    return this.OrderItems;
  }

  removeItem(id:any){
    this.OrderItems = this.OrderItems.filter(ele =>
      ele.product.productId != id);
  }

  setQte(id : any,qte : any){
   this.OrderItems[id].qte += qte;
  }

  addWish(prod : Product){
  this.wishList.push(prod);
  }

  getWishList():Product[]{
    return this.wishList;
  }

  setSubTotalSum(total : number){
    this.subTotalSum = total;
  }
  
  getSubTotalSum(){
    return this.subTotalSum;
  }

}
/*
 this.index=this.wishList.findIndex(p => {
    p.productId = prod.productId;
  });
  console.log(this.index);
  if(this.index != -1){
    alert("do exist");
  }
  else{
    alert("do not exist");
    this.wishList.push(prod);
  }
  */