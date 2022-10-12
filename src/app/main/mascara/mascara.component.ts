import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MascaraService } from 'src/app/mascara.service';
@Component({
  selector: 'app-mascara',
  templateUrl: './mascara.component.html',
  styleUrls: ['./mascara.component.css']
})
export class MascaraComponent implements OnInit {


  mascara: any;
  constructor(private data: MascaraService, private router: Router) { }

  ngOnInit(): void {
    this.data.getAllmascara().subscribe((data) => {
      this.mascara = data;
    })
  }
  sang(id: number) {
    this.router.navigate([`detail/${id}`])
  }
}
