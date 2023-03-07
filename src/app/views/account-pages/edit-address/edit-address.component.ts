import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.css']
})
export class EditAddressComponent implements OnInit {

  closeResult: string = '';
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  
  open(content:any) {
    this.modalService.open(content,{ size: 'xl' });
  } 
     
  
}
