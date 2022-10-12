import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const url = 'assets/data/mascara.json'
@Injectable({
  providedIn: 'root'
})
export class MascaraService {

  constructor(private http: HttpClient) { }
  getAllmascara(): Observable<any> {
    return this.http.get<any>(`${url}`)
  }
}
