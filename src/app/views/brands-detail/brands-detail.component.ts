import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrandList } from 'src/app/models/brand-list.model';
import { BrandServiceService } from 'src/app/services/brand-service.service';

interface Brands {
  alphaate: string,
  record: []
}

@Component({
  selector: 'app-brands-detail',
  templateUrl: './brands-detail.component.html',
  styleUrls: ['./brands-detail.component.css']
})


export class BrandsDetailComponent implements OnInit {

  brands: any;
  searchText: string = '';
  //items: string[] = ['Apple', 'Banana', 'Cherry', 'Durian'];
  filteredItems: any;
  brandtemp: []




  constructor(private brandService: BrandServiceService) { }

  ngOnInit(): void {
    this.retrieveBrands();
    this.filteredItems = this.brands;
  }

  filterList() {
    
    this.filteredItems = this.brandtemp.filter((brands) => {
      let temp: Brands = brands[1];
      return temp.alphaate.toUpperCase().startsWith(this.searchText.toUpperCase())
      /* console.log('brands name =', ); */
    });
  
    this.brands = this.filteredItems
    console.log('this.filteredItems === ', this.filteredItems);
  }

  retrieveBrands(): void {
    
    this.brandService.getAll()

      .subscribe(
        (data): any => {
          
          console.log('data====', data)
          this.brandtemp = data
          this.brands = data.reduce((r: any, e: any) => {
           // console.log('r = ', r)
           // console.log('e = ', e)
            let alphaate = e?.name[0];
            if (!r[alphaate]) r[alphaate] = { alphaate, record: [e] }

            else r[alphaate].record.push(e);

            return r;
          }, {});
          this.brands = Object.entries(this.brands)
          this.brandtemp = this.brands;
         // console.log('my array', this.brands);
        });
  }






}
