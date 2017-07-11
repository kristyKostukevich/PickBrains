import { Component } from '@angular/core';

@Component({
  selector: 'filter-component',
  templateUrl: 'filter.component.html',
  styleUrls: ['filter.component.scss'],
})
export class FilterComponent {
  // public arrayOfElem: fieldOfFilter[] = [
  //   { id: 11, name: 'Mr. Nice', items: ['a', 'sdfgsd'] },
  //   { id: 12, name: 'Narco', items: ['b', 'sdfgsd'] },
  //   { id: 13, name: 'Bombasto', items: ['c', 'sdfgsd'] },
  //   { id: 14, name: 'Celeritas', items: ['d', 'sdfgs d'] },
  //   { id: 15, name: 'Magneta', items: ['f', 'sdfgsd'] },
  //   { id: 16, name: 'RubberMan', items: ['g', 'sdfgsd'] },
  //   { id: 17, name: 'Dynama', items: ['i', 'sdfgsd'] },
  //   { id: 18, name: 'Dr IQ', items: ['j', 'sdfgsd'] },
  //   { id: 19, name: 'Magma', items: ['f', 'sdfgsd'] },
  //   { id: 20, name: 'Tornado', items: ['s', 'sdfgsd'] },
  // ];

  indexVisible = null;
  // visibility2 = '';
  toggle(index) {
    if (this.indexVisible === index) {
      this.indexVisible = null;
    } else {
      this.indexVisible = index;
    }
  }

}
export class fieldOfFilter {
  id: number;
  name: string;
  items: [string];
}

