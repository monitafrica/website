import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'website';
  currentUrl = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      this.router.events.subscribe(() => {
        this.currentUrl = document.location.pathname;
      });

      // navigate to top.
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
