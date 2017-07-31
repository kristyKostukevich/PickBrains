import { Component } from '@angular/core';


@Component({
  selector: 'person-page-filter',
  templateUrl: 'menu-filter.component.html',
  styleUrls: ['menu-filter.component.scss'],
})
 export class FilterComponent {
  user: string;

  constructor() {
    const data = JSON.parse(localStorage.getItem('user'));
    this.user = data.type;
  }
}
