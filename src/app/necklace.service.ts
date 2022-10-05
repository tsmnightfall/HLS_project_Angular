import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const url = 'assets/data/necklace.json'
@Injectable({
  providedIn: 'root'
})
export class NecklaceService {

  constructor(private http: HttpClient) { }
  getAllnecklace(): Observable<any> {
    return this.http.get<any>(`${url}`)
  }
}
