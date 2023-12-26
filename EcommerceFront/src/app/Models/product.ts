import { Category } from "./category";

export class Product {
    productId !:number ;
	productName !:String;
	productPrice !: number;
    productDescrip !:String;
    image !: any;
    category !: Category;

    constructor(productId : number, productName : String, productPrice : number, productDescrip:String, image:any ,category : Category){
    this.productId = productId;
	this.productName = productName;
	this.productPrice = productPrice;
    this.productDescrip = productDescrip; 
    this.image= image;
    this.category = category;
    }

   
    

}
