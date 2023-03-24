import { Component, OnInit } from '@angular/core';
import { login } from 'src/app/models/user';
import { AccountServiceService } from 'src/app/services/account-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  authError:boolean=false;


  constructor(private user: AccountServiceService) { }

  ngOnInit(): void {
  }

  login(data: login) {
   this.user.userLogin(data)
   this.user.invalidUserAuth.subscribe((result)=>{
    if(result){
       this.authError=true;
    }else{
      this.authError=false;
    }
    
  })
}


}
