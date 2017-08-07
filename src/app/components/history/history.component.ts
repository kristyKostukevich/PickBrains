import { Component} from '@angular/core';
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

  displayedColumns: string[] = ['name', 'status', 'change', 'date', 'time'];
  historyDatabase = new HistoryDatabase(this.httpService);
  dataSource: NotificationDataSource | null;

  ngOnInit() {
    this.dataSource = new NotificationDataSource(this.historyDatabase);
  }

}

export interface HistoryData {
  subject: string;
  object: string;
  date: Date;
  action: string;
}

export class HistoryDatabase {

  dataChange: BehaviorSubject<HistoryData[]> = new BehaviorSubject<HistoryData[]>([]);
  length: number = 0;

  get data(): HistoryData[] {
    return this.dataChange.value;
  }

  constructor(private httpService: HttpService) {
    this.httpService.getData('http://192.168.43.8:1488/api/history/?skip=0&capacity=10')
      .subscribe((res) => {
        const interviews: HistoryData[] = res.json().slice(1);
        interviews.forEach((interview) => {
          interview.date = new Date(interview.date);
        })
        this.dataChange.next(interviews);
        this.length = res.json()[0];
      });
  }
  onClick(event) {
    const skip:number = event.pageSize * event.pageIndex;
    this.httpService
      .getData(`http://192.168.43.8:1488/api/history/?skip=${skip}&capacity=${event.pageSize}`)
      .subscribe((res) => {
        const interviews: HistoryData[] = res.json().slice(1);
        interviews.forEach((interview) => {
          interview.date = new Date(interview.date);
        })
        this.dataChange.next(interviews);
      });
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

