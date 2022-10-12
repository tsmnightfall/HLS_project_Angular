import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const url = 'assets/data/lipstick.json'
@Injectable({
  providedIn: 'root'
})
export class LipstickService {

  constructor(private http: HttpClient) { }
  getAlllipstick(): Observable<any> {
    return this.http.get<any>(`${url}`)
  }
}
