import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import {AllcosmeticService } from 'src/app/allcosmetic.service';

@Component({
  selector: 'app-allcosmetic',
  templateUrl: './allcosmetic.component.html',
  styleUrls: ['./allcosmetic.component.css']
})
export class AllcosmeticComponent implements OnInit {
  allcosmetic: any;
  constructor(private data: AllcosmeticService, private router: Router) { }

  ngOnInit(): void {
    this.data.getAllallcosmetic().subscribe((data) => {
      this.allcosmetic = data;
    })
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
