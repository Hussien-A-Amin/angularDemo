import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductsApi {

  constructor(private http:HttpClient){

  }

  getAll():Observable<Iproduct[]>{
   return this.http.get<Iproduct[]>(`${environment.baseUrl}/products`)
  
  }
  
  getById(id:number):Observable<Iproduct>{
   return this.http.get<Iproduct>(`${environment.baseUrl}/products/${id}`)
  }

  getByCatId(id:number):Observable<Iproduct[]>{
   return this.http.get<Iproduct[]>(`${environment.baseUrl}/products?categoryId=${id}`)
  }

  delete(id:number):Observable<Iproduct>{
   return this.http.delete<Iproduct>(`${environment.baseUrl}/products/${id}`)
  }





}
