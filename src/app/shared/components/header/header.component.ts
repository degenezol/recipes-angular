import { Component, OnInit } from '@angular/core';
import { Pages } from './pages.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  pages: Array<Pages> = [
    {
      title: 'All recipes',
      route: '/recipes'
    },
    {
      title: 'Favorites',
      route: '/favorites'
    },
    {
      title: 'Purchases',
      route: '/purchases'
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}
