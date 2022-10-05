import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const url = 'assets/data/ring.json'
@Injectable({
  providedIn: 'root'
})
export class RingService {

  constructor(private http: HttpClient) { }
  getAllring(): Observable<any> {
    return this.http.get<any>(`${url}`)
  }
}
