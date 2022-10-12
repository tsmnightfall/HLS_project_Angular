import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccService } from '../../acc.service';
import { ManagerService } from '../../manager.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formSigup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required
    ]),
  })
  error: any;
  constructor(private acc: AccService, private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    console.log(this.formSigup.value)
    if (this.formSigup.valid) {
    this.acc.login(this.formSigup.value).subscribe((data) => {
      if (data[0]) {
        localStorage.setItem('acc', JSON.stringify(data[0]));
        this.router.navigate([''])
      }
      else {
        this.error = 'Nhap sai tài khoản';

      }
    })
  }
  }


  get f(): any {
    return this.formSigup.controls;
  }


}
