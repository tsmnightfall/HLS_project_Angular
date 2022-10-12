
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const url = './assets/data/acc.json'
@Injectable({
  providedIn: 'root'
})
export class AccService {

  constructor(private http: HttpClient) { }
  register(data: any): Observable<any> {
    return this.http.post<any>(`${url}/account`, data);
  }
  //
  login(data: any): Observable<any> {
    return this.http.get(`${url}/account?email=${data.email}&password=${data.password}`);
  }
}
