import { Component } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {

newPrd:Iproduct;
constructor (){
  this. newPrd= {
    id:0,
    name:"",
    price:0,
    quantity:0,
    categoryId:0,
    imgurl:""
  }
}


submit() {
  
}

}
