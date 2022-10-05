import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NecklaceService } from 'src/app/necklace.service';


@Component({
  selector: 'app-necklace',
  templateUrl: './necklace.component.html',
  styleUrls: ['./necklace.component.css']
})
export class NecklaceComponent implements OnInit {
  necklace: any;
  constructor(private data: NecklaceService, private router: Router) { }

  ngOnInit(): void {
    this.data.getAllnecklace().subscribe((data) => {
      this.necklace = data;
    })
  }
  sang(id: number) {
    this.router.navigate([`detail/${id}`])
  }
}

