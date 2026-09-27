import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class StaticProducts {

  products:Iproduct[];


constructor (){
  this.products=[
      {id:1,name:"dell laptdhop",quantity:20,price:10000,imgurl:"https://placehold.co/300x200?text=Dell+Laptop",categoryId:1},
      {id:2,name:"dell lsdfhgaptop",quantity:1,price:10000,imgurl:"https://placehold.co/300x200?text=Dell+Laptop",categoryId:1},
      {id:3,name:"dellsdfh laptop",quantity:0,price:10000,imgurl:"https://placehold.co/300x200?text=Dell+Laptop",categoryId:1},
      {id:4,name:"sdfhTablet",quantity:20,price:5000,imgurl:"https://placehold.co/300x200?text=Dell+Laptop",categoryId:2},
      {id:5,name:"Tasdfhblet",quantity:1,price:5000,imgurl:"https://placehold.co/300x200?text=Dell+Laptop",categoryId:2},
      {id:6,name:"Android",quantity:20,price:2000,imgurl:"https://placehold.co/300x200?text=ِAndroid",categoryId:3}
      ]

    }

    getAll ():Iproduct[]{
      return this.products
    }
    
   
    getByCatId (id:Number):Iproduct[]{
      return this.products.filter(p=>p.categoryId==id)
      
    }
 
    getById (id:Number):Iproduct|null{
      let prd=this.products.find(p=>p.id==id)
      return prd?prd:null;
    }

     
    GetNext (id:Number):number|null{
      let idx=this.products.findIndex(p=>p.id==id)
      try{

       return this.products[idx+1].id;
      }
      catch{
        return null;
      }


    }
    
    GetPrevious (id:Number):number|null{
      let idx=this.products.findIndex(p=>p.id==id)
      try{

       return this.products[idx-1].id;
      }
      catch{
        return null;
      }


    }
    



}
