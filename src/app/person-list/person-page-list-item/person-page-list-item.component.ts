import { Component, Input, OnInit } from '@angular/core';

export interface IPersonItem {
  name: string;
  primarySkill: string;
  location: string;
  status: string;
  date: Date;
  adress: string;
}

@Component({
  selector: 'person-page-list-item',
  templateUrl: 'person-page-list-item.component.html',
  styleUrls: ['person-page-list-item.component.scss'],
})
export class LineElementsComponent implements OnInit {
  @Input() person: IPersonItem;
  currentPerson: IPersonItem;

  ngOnInit() {
    this.currentPerson = this.person;
  }
}
