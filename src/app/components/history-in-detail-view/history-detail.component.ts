import { Component } from '@angular/core';
import { MenuService } from '../menu/menu.service';


@Component({
  selector: 'history',
  templateUrl: 'history-detail.component.html',
  styleUrls: ['history-detail.component.scss'],
})
export class HistoryDetailComponent {

  constructor(menuService: MenuService) {
  }

  createUrl(id: number, type: string):string {
    switch (type){
      case 'candidate':
        return `h`
    }
  }
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
