import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CleanserService } from 'src/app/cleanser.service';

@Component({
  selector: 'app-cleanser',
  templateUrl: './cleanser.component.html',
  styleUrls: ['./cleanser.component.css']
})
export class CleanserComponent implements OnInit {

  cleanser: any;
  constructor(private data: CleanserService, private router: Router) { }

  ngOnInit(): void {
    this.data.getAllcleanser().subscribe((data) => {
      this.cleanser = data;
    })
  }
  sang(id: number) {
    this.router.navigate([`detail/${id}`])
  }
}
