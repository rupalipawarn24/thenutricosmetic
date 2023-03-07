import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  is_pages: boolean = false;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.router.url == '/contact-us') {
      this.is_pages = true;
    } else {
      this.is_pages = false;
    }
    this.router.events.subscribe((evt) => {
      if ((evt instanceof NavigationStart)) {
        if (evt.url == '/contact-us') {
          this.is_pages = true;
        } else {
          this.is_pages = false;
        }
      }
    });
  }

}
