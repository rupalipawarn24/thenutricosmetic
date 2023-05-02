import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { AccountServiceService } from 'src/app/services/account-service.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('mymodal') mymodal: ElementRef | undefined;
  closeResult = '';

  constructor(private modalService: NgbModal,private user: AccountServiceService) { }
  ngAfterViewInit(): void {
    this.open(this.mymodal);
  }

  ngOnInit(): void {
  }
  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title',size: 'lg',windowClass: 'modal-xl' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  addSubscribe(data: any){
 
   this.modalService.dismissAll();
   this.user.addsubscribe(data).subscribe((result) => {
    if (result) {
       console.log(result);
    }
  })

  }
  

}
