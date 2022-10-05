import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const url = 'assets/data/cleanser.json'
@Injectable({
  providedIn: 'root'
})
export class CleanserService {

  constructor(private http: HttpClient) { }
  getAllcleanser(): Observable<any> {
    return this.http.get<any>(`${url}`)
  }
}
