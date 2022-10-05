import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const url = 'assets/data/earring.json'
@Injectable({
  providedIn: 'root'
})
export class EarringService {

  constructor(private http: HttpClient) { }
  getAllearring(): Observable<any> {
    return this.http.get<any>(`${url}`)
  }
}
