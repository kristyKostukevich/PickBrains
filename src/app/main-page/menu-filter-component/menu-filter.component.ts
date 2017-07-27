import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'person-page-filter',
  templateUrl: 'menu-filter.component.html',
  styleUrls: ['menu-filter.component.scss'],
})
export class FilterComponent implements OnInit {
  toggleFlags: boolean[];
  items: string[] = ['Person', 'Vacancy', 'History'];

  ngOnInit() {
    this.toggleFlags = [];
    this.toggleFlags[0] = true;
  }

  toggle(item: string) {
    console.log(item);
    let index: number = 0;
    for (const i of this.items) {
      this.toggleFlags[index] = false;
      if (i === item) {
        this.toggleFlags[index] = true;
      }
      index += 1;
    }
  }
}

