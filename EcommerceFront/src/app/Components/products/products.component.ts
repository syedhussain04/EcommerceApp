import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { share } from 'rxjs';
import { Product } from 'src/app/Models/product';
import { ProductService } from 'src/app/Services/product.service';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  allProducts!: Product[];
  products !: Product[];
  product !:Product;
  wishedProduct !:Product;
  category !: string;
  productImage: any;

  constructor(private productService : ProductService, private route : ActivatedRoute, private router : Router, private shared : SharedService) { }

  ngOnInit(): void {
    this.category = this.route.snapshot.params['cat'];
    this.getProductsByCat();
    }
  
  getProductsByCat(){
    console.log("##########",this.category);
    this.productService.getProductsByCat(this.category).subscribe(res => 
      { 
        res.map(p => {p.image = 'data:image/jpeg;base64,' + p.image});
        this.products = res;
        console.log("products",this.products)
      });
  }

  showProductDetails(value :any){
    this.router.navigateByUrl("/product/" + value);
  }

  addToCart(id:any){
    alert(id);
  }

  addToWishList(id:any){
  //let heart:HTMLDivElement = document.querySelector('.fa-heart') as HTMLDivElement;
  //heart.style.color ="lightcoral";
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



