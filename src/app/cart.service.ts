// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { url } from 'inspector';
// import { Cart } from './cart/cart';

// @Injectable({
//   providedIn: 'root'
// })

// export class CartService {

//   constructor(private http: HttpClient) { }
//   getProducts() {
//     return this.http.get<any>(`${url}`)
//   }
//   getDetail(id: number) {
//     return this.http.get<any>(`${url}/${id}`)
//   }
//   createForm(data: any) {
//     return this.http.post<any>(`${url_form}`, data);
//   }
//   deleteProduct(id: any) {
//     return this.http.delete<any>(`${url}/${id}`)
//   }
//   putProduct(data: any, id: any) {
//     return this.http.put<any>(`${url}/${id}`, data)
//   }
//   postProduct(data: any) {
//     return this.http.post<any>(`${url}`, data)
//   }
//   //Cart
//   postCart(data:Cart):Observable<Cart>{
//     return this.http.post<Cart>(`${url}/cart`,data)
//   }
//   putCart(data:Cart):Observable<Cart>{
//     return this.http.put<Cart>(`${url}/cart/${data.id}`,data)
//   }
//   getCart():Observable<any>{  
//     return this.http.get<any>(`${url}/cart`)
//   }
//   removeCart(id:number):Observable<any>{{
//     return this.http.delete<any>(`${url}/cart/${id}`)
//   }}
// }

