import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'website';
  currentUrl = '';

  constructor(private router: Router) {
    router.events.subscribe(() => {
      this.currentUrl = document.location.pathname;
    });
  }
}
