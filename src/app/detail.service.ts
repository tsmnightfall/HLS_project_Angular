import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const url = 'assets/data/db.json'
@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(private http: HttpClient) { }
  getalldetail(): Observable<any> {
    return this.http.get<any>(`${url}`)
  }
}
