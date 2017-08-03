import { Component, Input } from '@angular/core';
import { HttpService } from '../../http-service/http-service';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataSource } from '@angular/cdk';

@Component({
  selector: 'history-card',
  templateUrl: 'history.component.html',
  styleUrls: ['history.component.scss'],
})
export class HistoryComponent {

  constructor(private httpService: HttpService) {
  }

  displayedColumns: string[] = ['name', 'type', 'status', 'change', 'date'];
  historyDatabase = new HistoryDatabase(this.httpService);
  dataSource: NotificationDataSource | null;

  ngOnInit() {
    this.dataSource = new NotificationDataSource(this.historyDatabase);
  }
}

export interface HistoryData {
  candidateName: string;
  type: string;
  status: string;
  change: string;
  date: Date;
}

export class HistoryDatabase {

  dataChange: BehaviorSubject<HistoryData[]> = new BehaviorSubject<HistoryData[]>([]);

  get data(): HistoryData[] {
    return this.dataChange.value;
  }

  constructor(private httpService: HttpService) {
    // this.httpService.getData(url)
    //   .subscribe((res) => {
    //     const interviews: HistoryData[] = res.json();
    //     this.dataChange.next(interviews);
    //   });
    const history: HistoryData[] = [
      {
        candidateName: 'Kristy',
        type: 'candidate',
        status: 'email',
        change: 'Max',
        date: new Date(),
      },
      {
        candidateName: 'BitCoin',
        type: 'vacancy',
        status: 'status',
        change: 'Kostya',
        date: new Date(),
      },
      {
        candidateName: 'BitCoin',
        type: 'vacancy',
        status: 'status',
        change: 'Kostya',
        date: new Date(),
      },
      {
        candidateName: 'BitCoin',
        type: 'vacancy',
        status: 'status',
        change: 'Kostya',
        date: new Date(),
      },
      {
        candidateName: 'BitCoin',
        type: 'vacancy',
        status: 'status',
        change: 'Kostya',
        date: new Date(),
      },
      {
        candidateName: 'BitCoin',
        type: 'vacancy',
        status: 'status',
        change: 'Kostya',
        date: new Date(),
      },
      {
        candidateName: 'BitCoin',
        type: 'vacancy',
        status: 'status',
        change: 'Kostya',
        date: new Date(),
      },
      {
        candidateName: 'BitCoin',
        type: 'vacancy',
        status: 'status',
        change: 'Kostya',
        date: new Date(),
      },
      {
        candidateName: 'BitCoin',
        type: 'vacancy',
        status: 'status',
        change: 'Kostya',
        date: new Date(),
      },
      {
        candidateName: 'BitCoin',
        type: 'vacancy',
        status: 'status',
        change: 'Kostya',
        date: new Date(),
      },
      {
        candidateName: 'BitCoin',
        type: 'vacancy',
        status: 'status',
        change: 'Kostya',
        date: new Date(),
      },
      {
        candidateName: 'BitCoin',
        type: 'vacancy',
        status: 'status',
        change: 'Kostya',
        date: new Date(),
      },
      {
        candidateName: 'BitCoin',
        type: 'vacancy',
        status: 'status',
        change: 'Kostya',
        date: new Date(),
      }];
    this.dataChange.next(history);
  }
}

export class NotificationDataSource extends DataSource<any> {
  constructor(private exampleDatabase: HistoryDatabase) {
    super();
  }


  connect(): Observable<HistoryData[]> {
    return this.exampleDatabase.dataChange;
  }

  disconnect() {
  }
}

