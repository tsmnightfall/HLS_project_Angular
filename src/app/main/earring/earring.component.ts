import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EarringService } from 'src/app/earring.service';

@Component({
  selector: 'app-Earring',
  templateUrl: './earring.component.html',
  styleUrls: ['./earring.component.css']
})
export class EarringComponent implements OnInit {
  earring: any;
  constructor(private data: EarringService, private router: Router) { }

  ngOnInit(): void {
    this.data.getAllearring().subscribe((data) => {
      this.earring = data;
    })
  }
  sang(id: number) {
    this.router.navigate([`detail/${id}`])
  }
}