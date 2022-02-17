import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('email') namekey!: ElementRef;
  loginForm!: FormGroup
  constructor(private formBuilder:FormBuilder, private http:HttpClient, private router:Router, private toast:NgToastService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['', Validators.required],
      password:['', Validators.required]
    })
  }


  copyName(){
    localStorage.setItem("email",this.namekey.nativeElement.value);
  }



  newlogIn(){
    this.http.get<any>("http://localhost:3000/signup").subscribe(res=>{
      const checkuser = res.find((abc:any)=>{
        return abc.email === this.loginForm.value.email && abc.password === this.loginForm.value.password
      })
      if(checkuser){
        this.toast.success({detail:"success message", summary:"login success", duration:3000})
        this.loginForm.reset();
        this.router.navigate(['restaurent'])
      }else{
        this.toast.error({detail:"error message", summary:"login failed", duration:3000})
      }
    },err=>{
      alert("server error........")
    })

  

  }

}
