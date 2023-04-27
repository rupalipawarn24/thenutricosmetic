import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
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
  res: any;
  //recentList: any[];
  recentList: any[] = [];


  constructor(private modalService: NgbModal, private route: ActivatedRoute, private brandService: BrandServiceService) { }

  displaystyle: boolean = false;
  productId: any;
  recentData:any;
  productData: any;
  imageData: any;
  addreview!: FormGroup;
  variantId: any;
  reviewData: any;
  reviewValuedata: any;
  starRating = 0;


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
    ];

    this.productId = this.route.snapshot.params['id'];
    this.getproductListById();
    this.getReviewList();
   // this.getrecentProduct();
  }

  openScrollableContent(longContent: any) {
    this.modalService.open(longContent, { scrollable: true });
  }

  getproductListById() {
    this.brandService.getproductlistById(this.productId)
      .subscribe((data: any) => {
        this.productData = data;
        //console.log(this.productData);
        this.imageData = data[0].images;
        this.variantId = data[0].variants[0].variant_id;
        this.imageData.forEach((element: any) => {
          this.galleryImages.push({
            small: element.src,
            medium: element.src,
            big: element.src
          })
        });

        let isexist = false;
        let dataObj = [];
        let data1 = sessionStorage.getItem('recentlyProduct'); //get existing item in localstorage
        if (data1) //check if it exists or not empty
        {
          dataObj = JSON.parse(data1); //parse string
        }

        dataObj.forEach((element: any) => {
          if (element.product_id == this.productId) {
            isexist = true;
          }
        });

        if (!isexist) 
        {
          let newproduct = Object.assign({}, ...this.productData);
          dataObj.push(newproduct);
          sessionStorage.setItem("recentlyProduct", JSON.stringify(dataObj));

        }
      });
      this.getrecentProduct();

  }

  submitReview(reviewForm: NgForm) {

    let user = localStorage.getItem('user');
    let customer_id = user && JSON.parse(user).data[0].id;

    this.reviewValuedata = reviewForm.value;


    let product_id = this.productId;
    let variant_id = this.variantId;
    let ratings = this.starRating;

    let addreview: addReview = {
      product_id,
      customer_id,
      variant_id,
      ratings,
      ...this.reviewValuedata
    }
    this.brandService.addReview(addreview).subscribe((result) => {
      this.getReviewList();
    })
    reviewForm.resetForm();
  }

  getReviewList() {
    let product_id = this.productId;
    this.brandService.getReview(product_id).subscribe((result) => {
      this.res = result;
      this.reviewData = this.res.data;
    });
  }

  getrecentProduct(){
    let recent = sessionStorage.getItem('recentlyProduct');
   this.recentData = recent && JSON.parse(recent);
    this.recentData =this.recentData.slice(Math.max(this.recentData.length - 4, 0))
  }

}
