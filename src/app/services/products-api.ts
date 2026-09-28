import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IhttpResponse } from '../models/ihttp-response';

@Injectable({
  providedIn: 'root',
})
export class ProductsApi {

  constructor(private http:HttpClient){

  }

  getAll():Observable<IhttpResponse<Iproduct[]>>{


   return this.http.get<IhttpResponse<Iproduct[]>>(`${environment.baseUrl}/products/getall`)
  
  }
  
  getById(id:string):Observable<IhttpResponse<Iproduct>>{
   return this.http.get<IhttpResponse<Iproduct>>(`${environment.baseUrl}/products/${id}`)
  }

  getByCatId(id:string):Observable<IhttpResponse<Iproduct[]>>{
   return this.http.get<IhttpResponse<Iproduct[]>>(`${environment.baseUrl}/products?categoryId=${id}`)
  }

  delete(id:string):Observable<boolean>{
   return this.http.delete<boolean>(`${environment.baseUrl}/products/${id}`)
  }





}
