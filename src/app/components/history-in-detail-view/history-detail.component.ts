import { Component } from '@angular/core';
import { MenuService } from '../menu/menu.service';
import { HttpService } from '../../http-service/http-service';


@Component({
  selector: 'history',
  templateUrl: 'history-detail.component.html',
  styleUrls: ['history-detail.component.scss'],
})
export class HistoryDetailComponent {

  constructor(private menuService: MenuService, private httpServise: HttpService) {
  }

  history: HistoryDate[];
  length: number = 0;
  createUrl(skip: number, capacity: number): string {
    switch (this.menuService.getData().type) {
      case 'candidate':
        return `http://localhost:1337/api/candidates/${this.menuService.
        getData().id}/history?skip=${skip}&capacity=${capacity}`;
      case 'vacancy':
        return `http://localhost:1337/api/vacancies/${this.menuService.
        getData().id}/history?skip=${skip}&capacity=${capacity}`;
    }
  }

  ngOnInit() {
    this.httpServise.getData(this.createUrl(0, 10)).subscribe((res) => {
      this.history = this.createHistory(res.json().slice(1));
      this.length = res.json()[0];
    });
  }


  createHistory(history: any): HistoryDate[] {
    let currentHistory: HistoryDate[] = new Array<HistoryDate>();
    for (const i of history) {
      for (const j of i.changes)
        currentHistory.push(
          {
            user: i.user,
            changeDate: i.cahngeDate,
            change: j,
          });
    }
    return currentHistory;
  }

  onClick(event) {
    const skip: number = event.pageSize * event.pageIndex;
    this.httpServise.getData(this.createUrl(skip, event.pageSize)).subscribe((res) => {
      this.history = this.createHistory(res.json().slice(1));
    });

  }
}


export class HistoryDate {
  change: string;
  user: string;
  changeDate: Date;
}
