import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { addadress, deleteAddress, editadress, getAddress } from 'src/app/models/user';
import { AccountServiceService } from 'src/app/services/account-service.service';
import { filter } from 'rxjs/operators';



@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.css']
})
export class EditAddressComponent implements OnInit {

  userName: string = "";
  firstName: string = "";
  closeResult: string = '';
  addressData: addadress[] | undefined
  addressList: any;
  res: any;
  username1: any;
  editaddressData: any[] = [];
  editData: editadress[] | undefined

  // editaddressData:editadress|undefined;





  constructor(private modalService: NgbModal, private user: AccountServiceService, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('user')) {
      let userStore = localStorage.getItem('user');
      let userData = userStore && JSON.parse(userStore);
      this.firstName = userData.data[0].first_name;
      this.userName = userData.data[0].first_name + " " + userData.data[0].last_name;
      this.getAddressList()

    }
  }

  addAddress(data: any) {
    let user = localStorage.getItem('user');
    let customer_id = user && JSON.parse(user).data[0].id;

    let addressData: addadress = {
      customer_id,
      ...data
    }

    this.user.addAddress(addressData).subscribe((result) => {
      if (result) {

        // let address1 =localStorage.setItem('addressList',JSON.stringify(this.res.data));
        // console.log(this.res.data);
        this.modalService.dismissAll();
        setTimeout(() => {
          this.router.navigate(['/edit-address'])
        }, 4000);

        this.getAddressList()


      }
    })

  }


  editAddress(data: any) {
    let user = localStorage.getItem('user');
    let customer_id = user && JSON.parse(user).data[0].id;

    let editData: editadress = {
      customer_id,
      ...data
    }
    this.user.updateAddress(editData).subscribe((result) => {
      if (result) {
        this.modalService.dismissAll();
        this.getAddressList();
      }
    })

  }

  getAddressList() {
    let user = localStorage.getItem('user');
    let customers_id = user && JSON.parse(user).data[0].id;

    let getaddressData: getAddress = {
      customers_id,
    }

    this.user.getAddressList(customers_id).subscribe((result) => {
      this.res = result;
      this.addressList = this.res.data;
      // console.log(this.addressList);
    });
  }


  deleteAddress(id: number) {
    let user = localStorage.getItem('user');
    let customers_id = user && JSON.parse(user).data[0].id;

    let deleteaddressData: deleteAddress = {
      customers_id,
      id
    }

    this.user.deleteAddress(deleteaddressData).subscribe((result) => {

      if (result) {
        this.getAddressList();
      }
    });
  }

  openAdd(content: any) {
    this.modalService.open(content, { size: 'xl' });
  }

  openEdit(content: any, id: number) {
    this.modalService.open(content, { size: 'xl' });

    let user = localStorage.getItem('user');
    let customers_id = user && JSON.parse(user).data[0].id;

    let getaddressData: getAddress = {
      customers_id,
    }

    this.user.getAddressList(customers_id).subscribe((result) => {
      this.res = result;
      this.addressList = this.res.data;

      let item = this.res.data.filter((item: any) => id?.toString() === item.id?.toString())
      if (item.length) {
        this.editaddressData = item

      }

    });

  }



}
