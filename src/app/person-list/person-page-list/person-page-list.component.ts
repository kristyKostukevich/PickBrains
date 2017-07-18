import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { IPersonItem } from '../person-page-list-item/person-page-list-item.component';

@Component({
  selector: 'person-page-list',
  templateUrl: 'person-page-list.component.html',
  styleUrls: ['person-page-list.component.scss'],
})
export class PersonPageListComponent implements OnInit {
  @Input() personList: IPersonItem[];
  // currentList: IPersonItem[];

  ngOnInit() {
//   this.currentList = this.personList
}
//
//   ngOnChanges(changes: SimpleChanges) {
//     if (changes['personList']) {
//       this.currentList = this.personList;
//     }
//   }
}
