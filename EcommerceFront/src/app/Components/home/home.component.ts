import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  randomProducts!:Product[];

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.getRandomProducts()
  }

  getRandomProducts(){
    this.productService.getRandomProducts().subscribe(
      res => {
        res.map( p => p.image = 'data:image/jpeg;base64,' + p.image);
        this.randomProducts = res;
        console.log("random prod :", this.randomProducts);
      }
    )
  }
  


}
