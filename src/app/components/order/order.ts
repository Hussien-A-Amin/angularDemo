import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ICategory } from '../../models/i-category';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Shop } from '../shop/shop';

@Component({
  selector: 'app-order',
  imports: [FormsModule,CommonModule,Shop],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order {

@ViewChild("test") test!:ElementRef;


  recievedTotal:number=0;
TotalChanged(value: number) {
this.recievedTotal=value;
}
      categories:ICategory[];
  selectedCatId:number=0;


      constructor(){
          this.categories=[
          {id:1,name:"Mobile"},
          {id:2,name:"Computers"},
          {id:3,name:"Tablets"},
        ]
    }


    dotest(){
    console.log(this.test);
this.test.nativeElement.color="red";

      this.test.nativeElement.value="sfdgsg";
    }
}
