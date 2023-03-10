import { Component, OnInit } from '@angular/core';
import { BrandList } from 'src/app/models/brand-list.model';
import { BrandServiceService } from 'src/app/services/brand-service.service';

@Component({
  selector: 'app-brands-detail',
  templateUrl: './brands-detail.component.html',
  styleUrls: ['./brands-detail.component.css']
})
export class BrandsDetailComponent implements OnInit {

  brands: any;

  constructor(private brandService: BrandServiceService) { }

  ngOnInit(): void {
    this.retrieveBrands();

  }
  
  retrieveBrands(): void {
    this.brandService.getAll()
      .subscribe(
         (data):any => {
          this.brands = data.reduce((r:any,e:any)=>{
            let alphaate=e?.name[0];
            if(!r[alphaate]) r[alphaate] ={alphaate,record :[e]}

            else r[alphaate].record.push(e);

            return r;
          },{});
          this.brands=Object.entries(this.brands)
          // console.log(this.brands);
        });
  }

  
 

}
