import { Component, Input, OnInit } from '@angular/core';

export interface IPersonItem {
  eng_first_name: string;
  eng_second_name: string;
  ru_first_name: string;
  ru_second_name: string;
  skill_name: string;
  city: string;
  status: string;
  contact_date: Date;
  email: string;
  id : number;
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
