import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productmenu',
  templateUrl: './productmenu.component.html',
  styleUrls: ['./productmenu.component.css']
})
export class ProductmenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  routeUrl(url:any){
    this.router.navigate([`${url}`])
  }
}
