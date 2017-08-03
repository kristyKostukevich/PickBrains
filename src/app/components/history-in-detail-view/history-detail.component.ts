import { Component } from '@angular/core';


@Component({
  selector: 'history',
  templateUrl: 'history-detail.component.html',
  styleUrls: ['history-detail.component.scss'],
})
export class HistoryDetailComponent {
  history: HistoryDate[] = [{
    status: 'email',
    nameHRM: 'Vladislav',
    date: new Date(),
  },
  {
    status: 'namder',
    nameHRM: 'Vladislav',
    date: new Date(),
  },
    {
      status: 'email',
      nameHRM: 'Vladislav',
      date: new Date(),
    },
    {
      status: 'namder',
      nameHRM: 'Vladislav',
      date: new Date(),
    },
    {
      status: 'email',
      nameHRM: 'Vladislav',
      date: new Date(),
    },
    {
      status: 'namder',
      nameHRM: 'Vladislav',
      date: new Date(),
    },
    {
      status: 'email',
      nameHRM: 'Vladislav',
      date: new Date(),
    },
    {
      status: 'namder',
      nameHRM: 'Vladislav',
      date: new Date(),
    },
    {
      status: 'email',
      nameHRM: 'Vladislav',
      date: new Date(),
    },
    {
      status: 'namder',
      nameHRM: 'Vladislav',
      date: new Date(),
    },
    {
      status: 'email',
      nameHRM: 'Vladislav',
      date: new Date(),
    },
    {
      status: 'namder',
      nameHRM: 'Vladislav',
      date: new Date(),
    },
    {
      status: 'email',
      nameHRM: 'Vladislav',
      date: new Date(),
    },
    {
      status: 'namder',
      nameHRM: 'Vladislav',
      date: new Date(),
    },
  ];

}

export class HistoryDate {
  status: string;
  nameHRM: string;
  date: Date;
}
