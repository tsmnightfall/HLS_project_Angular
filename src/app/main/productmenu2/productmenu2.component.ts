import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-productmenu2',
  templateUrl: './productmenu2.component.html',
  styleUrls: ['./productmenu2.component.css']
})
export class Productmenu2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  routeUrl(url:any){
    this.router.navigate([`${url}`])
  }

}
