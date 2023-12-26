import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { SharedService } from '../../Services/shared.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  wishList !: Product[];
  isEmpty : boolean = true;

  constructor(private shared : SharedService) { }

  ngOnInit(): void {
    this.getWishList();
  }

  getWishList(){
    this.wishList = this.shared.getWishList();
    this.isEmpty = !this.isEmpty;
    console.log(this.isEmpty);
  }

}
