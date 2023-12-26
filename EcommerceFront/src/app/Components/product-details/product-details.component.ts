import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderItem } from 'src/app/Models/orderItem';
import { Product } from 'src/app/Models/product';
import { ProductService } from 'src/app/Services/product.service';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productName !:String;
  productPrice !:number;
  productDescrip !:String;
  productImage ! :any;
  product !: Product;
  orderItems!:OrderItem[];
  orderItem !: OrderItem;
  qte :number = 1;
  index!:number;
  wishedProduct!:Product;
  trigeredC : boolean =false;
  trigeredW : boolean =false;

  constructor(private route:ActivatedRoute, private productService : ProductService, private shared: SharedService) { }

  ngOnInit(): void {
    this.getProduct();
    this.orderItems = this.shared.getOrderItems();
    window.scrollTo(0, 0);
  }

  getProduct(){
    this.productName = this.route.snapshot.params['prod-name'];
    console.log("name :",this.productName);
    this.productService.getProductByName(this.productName).subscribe(
      res => {
        this.product=res;
        this.productPrice = this.product.productPrice; 
        this.productDescrip = this.product.productDescrip;
        this.productImage = 'data:image/jpeg;base64,' + this.product.image;
        console.log(this.product);
              }
    )
  }

  incrementQte(){
    this.qte ++;
  }
  decrementQte(){
    if(this.qte != 1){
    this.qte --;
    }
  }

  addToCart(id:any){
    this.trigeredC= !this.trigeredC;
    setTimeout(() => this.trigeredC = !this.trigeredC,3000);
    console.log("id",id)
    if(this.orderItems.find(ele => ele.product.productId == id))
    { 
      //console.log(this.orderItems.findIndex(ele => ele.product.productId == id));
      //alert("do exist");
      this.index = this.orderItems.findIndex(ele => ele.product.productId == id);
      //console.log("qte",this.qte);
      //
      this.shared.setQte(this.index,this.qte);
      //console.log("setQTE", this.shared.getOrderItems());
    }

    else{
      //alert("do not exist")
      this.orderItem = new OrderItem(this.product ,this.qte);
      console.log("orderItem",this.orderItem);
      this.shared.addOrderItem(this.orderItem);
    }
  }

  addToWishList(id:any){

    this.trigeredW = !this.trigeredW;
    console.log(this.trigeredW);
    setTimeout(() => this.trigeredW = !this.trigeredW,3000);
    this.productService.getProductById(id).subscribe( res =>
      {
        res.image = 'data:image/jpeg;base64,' + res.image;
        this.wishedProduct = res;
        if(this.shared.getWishList().filter(e => e.productId == this.wishedProduct.productId).length == 0){
          this.shared.addWish(this.wishedProduct);
        }
      })
    }
}
