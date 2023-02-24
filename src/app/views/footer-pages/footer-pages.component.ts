import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-pages',
  templateUrl: './footer-pages.component.html',
  styleUrls: ['./footer-pages.component.scss']
})
export class FooterPagesComponent implements OnInit {
  activeTab: any = 'Contact Us';
  constructor() { }

  ngOnInit(): void {
  }
  openPage(data: string) {
    this.activeTab = data;
  }
}
