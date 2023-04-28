import { Component, OnInit } from '@angular/core';
import { resetpwd } from 'src/app/models/user';
import { AccountServiceService } from 'src/app/services/account-service.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  authError:boolean=false;


  constructor(private user: AccountServiceService) { }

  ngOnInit(): void {
  }
  resetpassword(data: resetpwd){
    this.user.restPassword(data)
    this.user.invalidUserAuth.subscribe((result)=>{
      if(result){
         this.authError=true;
      }else{
        this.authError=false;
      }
      
    })

  }

}
