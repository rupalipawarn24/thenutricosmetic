import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { addadress, deleteAddress, editadress, getAddress, login, signUp } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {
  invalidUserAuth= new EventEmitter<boolean>(false)
  res : any;



  constructor(
      private router: Router,
      private http: HttpClient
  ) {
      
  }

  userSignUp(user: signUp){
    this.http.post('https://tncapi.tanajidinde.com/public/api/processregistration',user,{observe:'response'})
    .subscribe((result)=>{
     if(result){
       localStorage.setItem('user',JSON.stringify(result.body));
       this.router.navigate(['/']);
     }
     
    })
    // console.warn(user);
    // this.http.post(environment.apiUrl+'/processregistration',user).subscribe((data)=>{
    //   console.warn(data);
    // });
   }
   
   userLogin(data:login){
    this.http.post(environment.apiUrl+'/processlogin',data,{observe:'response'})
    .subscribe((result)=>{
      this.res = result;
         if(this.res.body.success === '1'){
          localStorage.setItem('user',JSON.stringify(result.body));
           this.router.navigate(['/account']);
          this.invalidUserAuth.emit(false)
        }else{
          this.invalidUserAuth.emit(true)
        }
    })

  }

  userAuthReload(){
    if(localStorage.getItem('user')){
      this.router.navigate(['/account']);
    }
  }

  addAddress(data: addadress) {
    return this.http.post('https://tncapi.tanajidinde.com/public/api/addshippingaddress', data);
  }
 
  getAddressList(data:getAddress){
  
    return this.http.post('https://tncapi.tanajidinde.com/public/api/getalladdress', data);

  }
  

  deleteAddress(data:deleteAddress){
    //console.log(data);
    return this.http.post('https://tncapi.tanajidinde.com/public/api/deleteshippingaddress', data);

  }

  updateAddress(data:editadress){
    console.log(data);
    return this.http.post('https://tncapi.tanajidinde.com/public/api/updateshippingaddress', data);

  }
  
 
}