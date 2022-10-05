import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailService } from 'src/app/detail.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
detail:any;
id:any
  constructor(private data:DetailService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe((param:any)=>{
      this.id = param.get(['id'])
      // alert(this.id)
      this.data.getalldetail().subscribe((data:any)=>{
        this.detail = data.find((item:any)=>{
          return item.id == this.id
        });
        console.log(this.detail)
      })
    })
    
   
  }

}
