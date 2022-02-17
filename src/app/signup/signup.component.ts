import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

 
  signupForm!: FormGroup
  constructor(private formBuilder:FormBuilder, private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name:['',Validators.required],
      mobile:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]
    })


  }


 

  // method to create user

  signIn(){
     this.http.post<any>("http://localhost:3000/signup",this.signupForm.value).subscribe(res=>{
       alert("registered successfully !");
       this.signupForm.reset();
       this.router.navigate(['login'])
     }, err=>{
       alert("something went wrong !")
     })
  }

}
