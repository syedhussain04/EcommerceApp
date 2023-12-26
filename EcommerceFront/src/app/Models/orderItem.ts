import { NonNullableFormBuilder } from "@angular/forms";
import { Product } from "./product";

export class OrderItem{
    product!:Product;
    qte!:number;
    
    constructor( product:Product, qte:number){
        this.product = product;
        this.qte = qte;
    }
}