import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { AccountServiceService } from 'src/app/services/account-service.service';


@Component({
  selector: 'app-restpassword',
  templateUrl: './restpassword.component.html',
  styleUrls: ['./restpassword.component.css']
})
export class RestpasswordComponent implements OnInit {

  constructor(private fb: FormBuilder,private user: AccountServiceService) {
  
    this.form = fb.group({
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]]
    }, { 
      validators: ConfirmedValidator('password', 'confirm_password')
    })
  }
    
  ngOnInit(): void {
  }

  form: FormGroup = new FormGroup({});
  
  
  get f(){
    return this.form.controls;
  }
   
  submit(){
    let password =this.form.value.password;
    let info = sessionStorage.getItem('otp');
    let id  = info && JSON.parse(info).id;
    let otp = info && JSON.parse(info).otp;
    let saverest ={
      id,
      otp,
      password
    }
    this.user.saverestpwd(saverest)


  }
}
function ConfirmedValidator(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if (matchingControl.errors && !matchingControl.errors['confirmedValidator']) {
      return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ confirmedValidator: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}

