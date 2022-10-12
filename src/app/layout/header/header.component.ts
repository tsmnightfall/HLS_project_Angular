import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerService } from 'src/app/manager.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  infor:any;
  listsearch:any;
  keyword:any;
  constructor(private router: Router,private data: ManagerService) {}

  ngOnInit(): void {
    this.data.getAllnew().subscribe(data=> {
      this.listsearch=data
    })
    this.data.tenacc.subscribe((data) => {
      this.infor = data;
    })
  }
  clickSearch(id: number) {
    this.keyword = ''
    this.router.navigate([`/detail/${id}`])

  }
  sang(id: number) {
    this.router.navigate([`detail/${id}`])
  }

}

