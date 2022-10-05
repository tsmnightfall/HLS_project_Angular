import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const url = 'assets/data/alljwelry.json'
@Injectable({
  providedIn: 'root'
})
export class AlljwelryService {

  constructor(private http: HttpClient) { }
  getAllalljwelry(): Observable<any> {
    return this.http.get<any>(`${url}`)
  }
}
