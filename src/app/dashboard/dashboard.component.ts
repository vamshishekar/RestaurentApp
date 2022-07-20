import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../share/api.service';
import { DashboardData } from './dashboard.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public displaying : string ="";
  formValue!:FormGroup;
  DashboardModelobj:DashboardData = new DashboardData();
  backendData!: any;   
  showAdd!: boolean;
  showUpdate!: boolean;

  constructor(private formBuilder:FormBuilder, private api:ApiService) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      address: [''],
      service: [''],
    })

    this.getFromBackend()
  }

    // for reseting entire form and switching buttons
  clickAddResto(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

      // now subscribing our data which is maped via service
    addResto(){
      this.DashboardModelobj.name= this.formValue.value.name;
      this.DashboardModelobj.email= this.formValue.value.email;
      this.DashboardModelobj.mobile= this.formValue.value.mobile;
      this.DashboardModelobj.address= this.formValue.value.address;
      this.DashboardModelobj.service= this.formValue.value.service;


      this.api.postRestaurent(this.DashboardModelobj).subscribe(res=>{
        console.log(res);
        alert("restaurent record added successfully...");
        let ref = document.getElementById('cancel');
        ref?.click();

        this.formValue.reset()
        this.getFromBackend();
      },
        err=>{
        alert("please try again......!");
      }
      )
    }  

  
     getFromBackend(){
       this.api.getRestaurent().subscribe(res=>{
           this.backendData = res;
       })
     }
     

     deleteResto(data:any){
       this.api.deleteRestaurent(data.id).subscribe(res=>{
         alert("restaurent deleted.......");
         this.getFromBackend();
       })
     }

      onEdit(data:any){
        this.showAdd = false;
        this.showUpdate = true;
        this.DashboardModelobj.id = data.id;
        this.formValue.controls['name'].setValue(data.name);
        this.formValue.controls['email'].setValue(data.email);
        this.formValue.controls['mobile'].setValue(data.mobile);
        this.formValue.controls['address'].setValue(data.address);
        this.formValue.controls['service'].setValue(data.service);
      }


      updateRestodata(){
      this.DashboardModelobj.name= this.formValue.value.name;
      this.DashboardModelobj.email= this.formValue.value.email;
      this.DashboardModelobj.mobile= this.formValue.value.mobile;
      this.DashboardModelobj.address= this.formValue.value.address;
      this.DashboardModelobj.service= this.formValue.value.service;

      this.api.updateRestaurent(this.DashboardModelobj,this.DashboardModelobj.id).subscribe(res=>{
        alert("updated successfully.....");
        let ref = document.getElementById('cancel');
        ref?.click();
        
        this.formValue.reset()
        this.getFromBackend();
      })
      }

    

  
      

}



