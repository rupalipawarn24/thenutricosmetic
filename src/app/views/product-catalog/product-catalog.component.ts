import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.scss']
})
export class ProductCatalogComponent implements OnInit {
  closeResult = '';

  catlogLayout = [
    "mt-3", "col-12", "col-md-3", "card-slider"
  ]
  activeIds: any = ["tab-1", "tab-2", "tab-3", "tab-4", "tab-5", "tab-6", "tab-7",];
  sliderForm: FormGroup = new FormGroup({
    sliderControl: new FormControl([10, 90])
  });
  options: Options = {
    floor: 0,
    ceil: 100,
    showTicks: true,
    tickStep: 25
  };
  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }
  changeLayout(data: any) {
    if (data == 'small') {
      this.catlogLayout = [
        "mt-3", "col-12", "col-md-3", "card-slider"
      ]
    } else {
      this.catlogLayout = [
        "mt-3", "col-12", "col-md-6", "card-slider"
      ]
    }
  }
  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
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
}
