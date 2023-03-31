import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { BrandServiceService } from 'src/app/services/brand-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  is_pages: boolean = false;
  title: string;
  imgSrc: string;
  caption: string;

  urls = [{ title: "Contact Us", name: "/contact-us", img: "assets/images/home.jpg", caption: "Customer Care" },
  { title: "how to shop", name: "/How-To-Shop", img: "assets/images/home.jpg", caption: "Customer Care" },
  { title: "orders & shipping", name: "/orders-shipping", img: "assets/images/home.jpg", caption: "Customer Care" },
  { title: "payment & pricing", name: "/payment-pricing", img: "assets/images/home.jpg", caption: "Customer Care" },
  { title: "returns & exchanges", name: "/returns-exchanges", img: "assets/images/home.jpg", caption: "Customer Care" },
  { title: "term & conditions", name: "/term-conditions", img: "assets/images/home.jpg", caption: "Customer Care" },
  { title: "faqs", name: "/faqs", img: "assets/images/home.jpg", caption: "Customer Care" },
  { title: "privacy policy", name: "/privacy-policy", img: "assets/images/home.jpg", caption: "Customer Care" },
  { title: "cookie", name: "/cookie", img: "assets/images/home.jpg", caption: "Customer Care" },
  { title: "disclaimer", name: "/disclaimer", img: "assets/images/home.jpg", caption: "Customer Care" },
  { title: "accessibility", name: "/accessibility", img: "assets/images/home.jpg", caption: "Customer Care" },
  { title: "THE NUTRICOSMETIC COMPANY", name: "/about-us", img: "assets/images/About_Us_Banner.webp", caption: "Welcome To" },
  { title: "Our Promise To You", name: "/customer-promise", img: "assets/images/Our-Customer-Promise_Banner.jpg", caption: "Shop Anytime, Anywhere" },
  { title: "Give A Gift Card", name: "/gift-cards", img: "assets/images/Gift-Cards_Banner.png", caption: "The Perfect Gifts" },
  { title: "Refer A Friend", name: "/refer-a-friend", img: "assets/images/Refer-A-Friend_Banner.jpg", caption: "Share The Love" },
  { title: "Our Loyalty Program", name: "/beauty-beneath-the-surface", img: "assets/images/Beauty-Points_Banner.jpg", caption: "Beauty Beneath The Surface" },
  { title: "Affiliates Program", name: "/affiliates", img: "assets/images/Affiliates_Banner.jpg", caption: "Join Us" },
  { title: "Join Our Team", name: "/careers", img: "assets/images/Careers.jpg", caption: "Creating The Future" },
  { title: "Invest In The Future", name: "/investors", img: "assets/images/Investors_Banner.jpg", caption: "The Nutricosmetic Company" },
  { title: "Advertise With Us", name: "/advertising", img: "assets/images/Advetisement.jpg", caption: "The Nutricosmetic Company" },  
  ];

  // urls: string[] = [ '/orders-shipping','/payment-pricing','/returns-exchanges','/term-conditions','/faqs','/privacy-policy','/cookie','/disclaimer','/accessibility']; 

  menu_list: any;


  constructor(
    private router: Router,
    private brandService: BrandServiceService
    ) { }

   

  ngOnInit(): void {
    for (var url of this.urls) 
    {
    if (this.router.url == url.name) {
      this.is_pages = true;
      this.imgSrc=url.img;
      this.title=url.title;
      this.caption=url.caption;
    } else {
      this.is_pages = false;
    }
  }
  
    this.router.events.subscribe((evt) => {
      if ((evt instanceof NavigationEnd)) {
        for (var url of this.urls) 
      {
        if (evt.url == url.name) {
          this.is_pages = true;
          this.imgSrc=url.img;
          this.title=url.title;
          this.caption=url.caption;
          break;
        } else {
          this.is_pages = false;
        }
      }
      }
    });
    this.getmenuList();

   }

   getmenuList(){
    this.brandService.getmenuList()
      .subscribe((data: any) => {
        this.menu_list=data;
        console.log(this.menu_list);

      });
  }

}
