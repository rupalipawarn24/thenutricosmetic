import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { signUp } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {
  
  


  constructor(
      private router: Router,
      private http: HttpClient
  ) {
      
  }

  userSignUp(user: signUp){
    // this.http.post('https://tanajidinde.com/tncapi/public/api/processregistration',user,{observe:'response'})
    // .subscribe((result)=>{
    //  if(result){
    //    localStorage.setItem('user',JSON.stringify(result.body));
    //    this.router.navigate(['/']);
    //  }
     
    // })
    this.http.post(environment.apiUrl+'/processregistration',user).subscribe((data)=>{
      console.warn(data);
    });
   
     
   }

 
}
