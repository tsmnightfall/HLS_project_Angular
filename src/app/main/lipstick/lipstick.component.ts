import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LipstickService } from 'src/app/lipstick.service';

@Component({
  selector: 'app-lipstick',
  templateUrl: './lipstick.component.html',
  styleUrls: ['./lipstick.component.css']
})
export class LipstickComponent implements OnInit {

  lipstick: any;
  constructor(private data: LipstickService, private router: Router) { }

  ngOnInit(): void {
    this.data.getAlllipstick().subscribe((data) => {
      this.lipstick = data;
    })
  }
  sang(id: number) {
    this.router.navigate([`detail/${id}`])
  }

}
