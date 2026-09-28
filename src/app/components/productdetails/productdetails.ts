import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from '../../models/iproduct';
import { Location } from '@angular/common';
import { ProductsApi } from '../../services/products-api';
import { SwalPortalTargets ,SwalComponent,SwalDirective } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-productdetails',
  imports: [SwalComponent, SwalDirective],
  templateUrl: './productdetails.html',
  styleUrl: './productdetails.css',
})
export class Productdetails implements OnInit{
handleDismiss($event: string|undefined) {
}
handleDenial() {
}
saveFile($event: any) {
}

  hasNext!:boolean;
  hasPrevious!:boolean;
  currentId!:string;
  currentProduct!:Iproduct|null;
  constructor(private activateRoute:ActivatedRoute,d:SwalPortalTargets   ,private productsApi:ProductsApi
    ,private _location:Location ,private router:Router) {
   
  }
  ngOnInit(): void {

    this.activateRoute.paramMap.subscribe((map)=>{

   this.currentId=String(map.get('id'));
   this.productsApi.getById(this.currentId).subscribe({
    next:(response)=>{
      this.currentProduct=response.data

    },
    error:()=>{

    }
   });

    //  this.hasNext=this.productService.GetNext(this.currentId)!=null;
    //  this.hasPrevious=this.productService.GetPrevious(this.currentId)!=null;

    });

  }


  
  goBack(){
    this._location.back();
  }
  goPrivious(){
    //  let  id=this.productSe
    // rvice.GetPrevious(this.currentId);
    //  if(id!=null){
    // this.router.navigateByUrl(`/ProductsDetails/${id}`);

    //  }
    //  else{

    //  }
  }



  goNext(){
    //   let  id=this.productService.GetNext(this.currentId);
    //  if(id!=null){
    // this.router.navigateByUrl(`/ProductsDetails/${id}`);

    //  }
    //  else{

    //  }
  }
}
