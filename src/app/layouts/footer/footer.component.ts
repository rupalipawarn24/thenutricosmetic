import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountServiceService } from 'src/app/services/account-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private user: AccountServiceService) { }

  ngOnInit(): void {
  }
  addSubscribe(data: NgForm){
 

     this.user.addsubscribe(data.form.value).subscribe((result) => {
     if (result) {
      console.log(result);

     }
   })
   data.reset();

   }

}
