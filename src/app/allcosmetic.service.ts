import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const url = 'assets/data/allcosmetic.json'
@Injectable({
  providedIn: 'root'
})
export class AllcosmeticService {

  constructor(private http: HttpClient) { }
  getAllallcosmetic(): Observable<any> {
    return this.http.get<any>(`${url}`)
  }
}
