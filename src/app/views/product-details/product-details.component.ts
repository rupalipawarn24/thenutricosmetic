import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { NgxGalleryImage } from '@kolkov/ngx-gallery';
import { NgxGalleryAnimation } from '@kolkov/ngx-gallery';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { addReview, getReview } from 'src/app/models/brand-list.model';
import { BrandServiceService } from 'src/app/services/brand-service.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor(private modalService: NgbModal, private route: ActivatedRoute, private brandService: BrandServiceService) { }

  displaystyle: boolean = false;
  productId: any;
  productData: any;
  imageData:any;
  addreview!: FormGroup;
  variantId:any;
  

  ngOnInit(): void {
    this.galleryOptions = [
      {
        width: '320px',
        height: '600px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20,
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      // {
      //   small: 'assets/images/product-1.png',
      //   medium: 'assets/images/product-1.png',
      //   big: 'assets/images/product-1.png'
      // },
      // {
      //   small: 'assets/images/product-2.png',
      //   medium: 'assets/images/product-2.png',
      //   big: 'assets/images/product-2.png'
      // },
      // {
      //   small: 'assets/images/product-3.png',
      //   medium: 'assets/images/product-3.png',
      //   big: 'assets/images/product-3.png'
      // },
      // {
      //   small: 'assets/images/product-4.png',
      //   medium: 'assets/images/product-4.png',
      //   big: 'assets/images/product-4.png'
      // },
      // {
      //   small: 'assets/images/product-5.png',
      //   medium: 'assets/images/product-5.png',
      //   big: 'assets/images/product-5.png'
      // }
    ];

    this.productId = this.route.snapshot.params['id'];
    this.getproductListById();
    this.getReviewList();
  }

  openScrollableContent(longContent: any) {
    this.modalService.open(longContent, { scrollable: true });
  }
  getproductListById() {
    this.brandService.getproductlistById(this.productId)
      .subscribe((data: any) => {
        this.productData = data;
        this.imageData=data[0].images;

        // console.log(this.productData);
         this.variantId=data[0].variants[0].variant_id;


         //console.log(this.variantId);
        
        this.imageData.forEach( (element: any) => {
         // console.log(element.src);
          
            this.galleryImages.push({ small:element.src,
               medium:element.src,
               big:element.src})


      });

     // console.log(this.galleryImages);


      });
  }
  close() {

  }
  submitReview(data:any) {
    let user = localStorage.getItem('user');
    let customer_id = user && JSON.parse(user).data[0].id;

    let product_id=this.productId;
     let variant_id=this.variantId;
     let ratings=3;

    let addreview: addReview = {
      product_id,
      customer_id,
      variant_id,
      ratings,
      ...data
    }

     console.log(addreview);

     this.brandService.addReview(addreview).subscribe((result) => {
      this.getReviewList();
   
    })
  }

  getReviewList() {   

    let product_id  = this.productId;

    let getreviewData: getReview = {
      product_id
    }
 
    this.brandService.getReview(getreviewData).subscribe((result) => {
      
       console.log(result);
    });
  }


}
