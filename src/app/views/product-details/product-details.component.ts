import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { NgxGalleryImage } from '@kolkov/ngx-gallery';
import { NgxGalleryAnimation } from '@kolkov/ngx-gallery';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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

        // console.log(this.imageData);
        
        this.imageData.forEach( (element: any) => {
         // console.log(element.src);
          
            this.galleryImages.push({ small:element.src,
               medium:element.src,
               big:element.src})


      });

      console.log(this.galleryImages);


      });
  }
  close() {

  }

}
