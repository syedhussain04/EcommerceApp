export class Category {
    categoryId !:number ;
    categoryName !:String;

    constructor(categoryId : number, categoryName : String){
    this.categoryId = categoryId;
    this.categoryName = categoryName;
    }
}
