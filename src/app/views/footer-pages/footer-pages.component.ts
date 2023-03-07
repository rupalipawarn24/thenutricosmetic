import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-pages',
  templateUrl: './footer-pages.component.html',
  styleUrls: ['./footer-pages.component.scss']
})
export class FooterPagesComponent implements OnInit {
  activeTab: any = 'contact-us';
  constructor(private router: Router) { }

  ngOnInit(): void {
    // console.log(this.router.url.substring(1));
    this.activeTab=this.router.url.substring(1);
  }
  openPage(data: string) {
    this.activeTab = data;
  }
}
