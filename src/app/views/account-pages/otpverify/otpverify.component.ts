import { Component, OnInit, ViewChild } from '@angular/core';
import { otpdata } from 'src/app/models/user';
import { AccountServiceService } from 'src/app/services/account-service.service';

@Component({
  selector: 'app-otpverify',
  templateUrl: './otpverify.component.html',
  styleUrls: ['./otpverify.component.css']
})
export class OtpverifyComponent implements OnInit {
  otp: any;
  showOtpComponent = true;
  authError:boolean=false;
  msgError:string;


  @ViewChild('ngOtpInput', { static: false}) ngOtpInput: any;

  constructor(private user: AccountServiceService) { }

  ngOnInit(): void {
  }

  config = {
    allowNumbersOnly: false,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      'width': '23%',
      'height': '50px'
    }
  };
  onOtpChange(otp: any) {
    this.otp = otp;
  }

  validate(){
    let user = localStorage.getItem('user');
    let id  = user && JSON.parse(user).data.id;
    let otp = this.otp;

    let otpdata = {
      id ,
      otp 
     
    }
    this.user.otpverify(otpdata)
    this.user.invalidUserAuth.subscribe((result)=>{
      if(result){
         this.authError=true;
      }else{
        this.authError=false;
      }
      
    })
    this.user.invalidmsg.subscribe((result)=>{
      this.msgError=result;
      
    })

  }

}
