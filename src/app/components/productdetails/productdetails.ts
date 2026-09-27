import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StaticProducts } from '../../services/static-products';
import { Iproduct } from '../../models/iproduct';
import { Location } from '@angular/common';

@Component({
  selector: 'app-productdetails',
  imports: [],
  templateUrl: './productdetails.html',
  styleUrl: './productdetails.css',
})
export class Productdetails implements OnInit{

  hasNext!:boolean;
  hasPrevious!:boolean;
  currentId!:number;
  currentProduct!:Iproduct|null;
  constructor(private activateRoute:ActivatedRoute 
    ,private productService:StaticProducts,private _location:Location ,private router:Router) {
   
  }
  ngOnInit(): void {

    this.activateRoute.paramMap.subscribe((map)=>{

   this.currentId=Number(map.get('id'));
   this.currentProduct=this.productService.getById(this.currentId);

     this.hasNext=this.productService.GetNext(this.currentId)!=null;
     this.hasPrevious=this.productService.GetPrevious(this.currentId)!=null;

    });

  }


  
  goBack(){
    this._location.back();
  }
  goPrivious(){
     let  id=this.productService.GetPrevious(this.currentId);
     if(id!=null){
    this.router.navigateByUrl(`/ProductsDetails/${id}`);

     }
     else{

     }
  }



  goNext(){
      let  id=this.productService.GetNext(this.currentId);
     if(id!=null){
    this.router.navigateByUrl(`/ProductsDetails/${id}`);

     }
     else{

     }
  }
}
