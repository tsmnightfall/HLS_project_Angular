import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
const url = 'assets/data/db.json'
@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  tenacc = new Subject<object>()
  constructor(private http: HttpClient) { }
  getAllnew(): Observable<any> {
    let dataacc: any = localStorage.getItem('acc');
    this.tenacc.next(JSON.parse(dataacc))
    console.log(this.tenacc)
    return this.http.get<any>(`${url}`)
  }


}
