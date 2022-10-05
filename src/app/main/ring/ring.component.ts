import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RingService } from 'src/app/ring.service';

@Component({
  selector: 'app-Ring',
  templateUrl: './ring.component.html',
  styleUrls: ['./ring.component.css']
})
export class RingComponent implements OnInit {
  ring: any;
  constructor(private data: RingService, private router: Router) { }

  ngOnInit(): void {
    this.data.getAllring().subscribe((data) => {
      this.ring = data;
    })
  }
  sang(id: number) {
    this.router.navigate([`detail/${id}`])
  }
}