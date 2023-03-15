import { Component, OnInit } from '@angular/core';
import { signUp } from 'src/app/models/user';
import { AccountServiceService } from 'src/app/services/account-service.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  constructor(private user: AccountServiceService) { }

  ngOnInit(): void {
  }

  signUp(data: signUp) {
    this.user.userSignUp(data);
    
  }

}
