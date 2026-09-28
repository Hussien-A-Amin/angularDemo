import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ICategory } from '../../models/i-category';
import { HighlightCard } from '../../directives/highlight-card';
import { SqurePipe } from '../../Pipes/squre-pipe';
import { Router, RouterLink } from '@angular/router';
import { ProductsApi } from '../../services/products-api';

@Component({
  selector: 'app-shop',
  imports: [CommonModule, FormsModule, HighlightCard, RouterLink],
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})
export class Shop implements OnChanges,OnInit {
goTo(id: string) {
this.router.navigateByUrl(`/ProductsDetails/${id}`);
}

  
  filterdProducts:Iproduct[]=[];
  total:number=0;
  myDate=new Date();
  @Input()
  recieverCatId:number=0;
@Output() onTotalChanged:EventEmitter<number>;




    constructor (private productsApi:ProductsApi,private router:Router){


  this.onTotalChanged=new EventEmitter<number>();


    }
  ngOnInit(): void {

    this.filter();
  }
  ngOnChanges() {
    // console.log("ngOnChanges");
  }

    buy(qunt:string,prd:Iproduct){
      this.total+=+qunt*prd.price;
      prd.quantity-=+qunt;

      this.onTotalChanged.emit(this.total);


    }
   
   


    trackByFn(index : number,item :Iproduct){
      return item.id;
    }

    filter() {
      if(this.recieverCatId==0){
         this.productsApi.getAll().subscribe({
          next:(response)=>{
                    
            console.log("======================================================");
            console.log(response)

            
            this.filterdProducts=response.data;
             this.total=500;
          },
          error:(error)=>{
            console.log(error);
          }
        })
      }

      else{

         this.productsApi.getByCatId(this.recieverCatId.toString()).subscribe({
          next:(response)=>{
            this.filterdProducts=response.data;
          },
          error:(error)=>{
            console.log(error);
          }
        })

      }
    }
    test(){
           
    }

}
