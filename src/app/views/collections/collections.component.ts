import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrandServiceService } from 'src/app/services/brand-service.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {
  
  brandId:any;
  brandData: any;
  constructor(
    private route:ActivatedRoute,
    private brandService: BrandServiceService

    ) { }

  ngOnInit(): void {
    this.brandId=this.route.snapshot.params['id'];
    this.getbrandListById();
  }
 
  getbrandListById() {
    this.brandService.getbrandlistById(this.brandId)
      .subscribe((data: any) => {
        this.brandData=data;
        console.log(this.brandData);
      });
  }

}
