import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import {AlljwelryService } from 'src/app/alljwelry.service';

@Component({
  selector: 'app-alljwelry',
  templateUrl: './alljwelry.component.html',
  styleUrls: ['./alljwelry.component.css']
})
export class AlljwelryComponent implements OnInit {
  alljwelry: any;
  constructor(private data: AlljwelryService, private router: Router) { }

  ngOnInit(): void {
    this.data.getAllalljwelry().subscribe((data) => {
      this.alljwelry = data;
    })
  }
  routeUrl(url:any){
    this.router.navigate([`${url}`])
  }
  sang(id: number) {
    this.router.navigate([`detail/${id}`])
  }
  customOptions: OwlOptions = {
    loop: true, 
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    center:true,
    autoplayTimeout: 1500,
    autoplay:true,
    navText: ['', ''],
    responsive: {
      320: {
        items: 2,
        
    },
    375: {
        items: 2,
        
    },
    768: {
        items: 4,
       
    }
    },
    nav: true
  }

}
