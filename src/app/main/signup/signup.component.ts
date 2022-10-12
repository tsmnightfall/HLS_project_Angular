import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccService } from '../../acc.service';
import { ManagerService } from 'src/app/manager.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formSigup = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern("(09|03|07|08|05)+([0-9]{8})")
    ]),
    password: new FormControl('', [
      Validators.required
    ]),
    address: new FormControl(''),
    date: new FormControl(''),
  })
  constructor(private acc: AccService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    console.log(this.formSigup.valid);
    if (this.formSigup.valid) {
      this.acc.register(this.formSigup.value).subscribe((hehe) => {
        if (hehe) {
          this.router.navigate(['login'])
        }
      })
      console.log(this.formSigup.value)
    }
   }

  get f(): any {
    return this.formSigup.controls;
  }

}
