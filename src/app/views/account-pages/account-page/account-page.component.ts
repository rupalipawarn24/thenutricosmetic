import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit {
  userName:string="";
  firstName:string="";

 

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('user')){
      let userStore = localStorage.getItem('user');
      let userData = userStore && JSON.parse(userStore);
      this.firstName=userData.data[0].first_name;
      this.userName=userData.data[0].first_name +" "+userData.data[0].last_name;
    }

  }

}
