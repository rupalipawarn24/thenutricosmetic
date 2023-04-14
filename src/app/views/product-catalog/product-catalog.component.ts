import { Component, Input, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { BrandServiceService } from 'src/app/services/brand-service.service';
import { WishListService } from 'src/app/services/wish-list.service';
import { addwishlist } from 'src/app/models/wishlist';
@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.scss']
})
export class ProductCatalogComponent implements OnInit {
  closeResult = '';
  brandId:any;
  brandData: any;
  @Input() addedToWishlist: boolean;
  addressData:addwishlist[]|undefined
  productId:number=0;
  star_clicked: boolean = false;
  @Input() isDisabled: boolean = false;

  starRating=0;

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
    private modalService: NgbModal,
    private route:ActivatedRoute,
    private brandService: BrandServiceService,
    private wishlistService: WishListService

  ) { }

  ngOnInit(): void {
    this.brandId=this.route.snapshot.params['id'];
    this.getbrandListById();
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

  getbrandListById() {
    this.brandService.getbrandlistById(this.brandId)
      .subscribe((data: any) => {
        this.brandData=data;
       // console.log(this.brandData);
      });
  }

  handleAddToWishlist(brand:any,variant_id:number,product_id:number) {

    // brand.onWishlist = !brand.onWishlist;

    if (!brand.onWishlist) {
      let user = localStorage.getItem('user');
      let customer_id = user && JSON.parse(user).data[0].id;
  
      let wishlistData: addwishlist = {
        product_id,
        variant_id,
        customer_id
      }
      this.wishlistService.addToWishlist(wishlistData).subscribe(() => {
    
        this.productId= product_id;
      })
      brand.onWishlist = !brand.onWishlist;      

    }
    else{
      brand.onWishlist = true;
     // console.log("remove");

    }

  }


}
