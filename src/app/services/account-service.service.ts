import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { addadress, deleteAddress, editadress, getAddress, login, otpdata, resetpwd, signUp } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {
  invalidUserAuth= new EventEmitter<boolean>(false)
  invalidemailAuth= new EventEmitter<boolean>(false)
  invalidmsg= new EventEmitter<string>()

  res : any;



  constructor(
      private router: Router,
      private http: HttpClient
  ) {
      
  }

  userSignUp(user: signUp){
    
    this.http.post('https://tncapi.tanajidinde.com/api/customers',user,{observe:'response'})
    .subscribe((result)=>{
     if(result){
       localStorage.setItem('user',JSON.stringify(result.body));
       this.router.navigate(['/login']);
       
     }
     else
     {
      console.error();
    
     }
     
    })
    // console.warn(user);
    // this.http.post(environment.apiUrl+'/processregistration',user).subscribe((data)=>{
    //   console.warn(data);
    // });
   }
   
   userLogin(data:login){
    this.http.post('https://tncapi.tanajidinde.com/api/login',data,{observe:'response'})
    .subscribe((result)=>{
      this.res = result;
         if(this.res.body.success == '1')
         {
          localStorage.setItem('user',JSON.stringify(result.body));
           this.router.navigate(['/account']);
          this.invalidUserAuth.emit(false)
        }else
        {
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
    return this.http.post('https://tncapi.tanajidinde.com/api/shippingAddress', data);
  }
 
  getAddressList(id:number){
      
    let endPoints = "https://tncapi.tanajidinde.com/public/api/shippingAddress?customer_id";
    return this.http.get(`${endPoints}=${id}`);

  }
  

  deleteAddress(data:deleteAddress){
    //console.log(data);
    return this.http.post('https://tncapi.tanajidinde.com/public/api/deleteshippingaddress', data);

  }

  updateAddress(data:editadress){
    console.log(data);
    return this.http.post('https://tncapi.tanajidinde.com/public/api/updateshippingaddress', data);

  }

  restPassword(data:resetpwd){
    this.http.post('https://tncapi.tanajidinde.com/api/forgotPassword?email',data,{observe:'response'})
    .subscribe((result)=>{
      this.res = result;
         if(this.res.body.success == '1')
         {
          // localStorage.setItem('user',JSON.stringify(result.body));
           this.router.navigate(['/otpverify']);
          this.invalidemailAuth.emit(false)
        }else
        {
          this.invalidemailAuth.emit(true)
        }
        console.log(this.res);
    })

  }
  otpverify(data:any){
    sessionStorage.setItem('otp',JSON.stringify(data));

    this.http.post('https://tncapi.tanajidinde.com/api/OTPVerificationForForgotPassword',data,{observe:'response'})
    .subscribe((result)=>{
      this.res = result;
         if(this.res.body.success == '1')
         {
           this.router.navigate(['/rest_password']);
          this.invalidUserAuth.emit(false)
        }else
        {
          this.invalidUserAuth.emit(true)
          this.invalidmsg.emit(this.res.body.message)
        }
       
    })

  }
  saverestpwd(data:any){
    this.http.post('https://tncapi.tanajidinde.com/api/resetPassword',data,{observe:'response'})
    .subscribe((result)=>{
      this.res = result;
         if(this.res.body.success == '1')
         {
           this.router.navigate(['/login']);
        }
       
    })
  }

  
 
}
