import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { DataSource } from '@angular/cdk';
import { HttpService } from '../http-service/http-service';


@Component({
  selector: 'notification',
  templateUrl: 'notification.component.html',
  styleUrls: ['notification.component.scss'],
})
export class NotificationComponent{
  constructor(private httpService: HttpService) {}
  displayedColumns = ['name', 'time', 'date'];
  notificationDatabase = new NotificationDatabase(this.httpService);
  dataSource: NotificationDataSource | null;

  ngOnInit() {
    this.dataSource = new NotificationDataSource(this.notificationDatabase);
  }
}


export interface UserData {
  candidateName: string;
  date: Date;
}

export class NotificationDatabase {

  dataChange: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);

  get data(): UserData[] {
    return this.dataChange.value;
  }

  constructor(private httpService: HttpService) {
    this.httpService.getData('http://localhost:1337/api/notification/upcoming-interviews')
      .subscribe((res) => {
        const interviews: UserData[] = res.json();
        this.dataChange.next(interviews);
      });
  }
}

export class NotificationDataSource extends DataSource<any> {
  constructor(private exampleDatabase: NotificationDatabase) {
    super();
  }


  connect(): Observable<UserData[]> {
    return this.exampleDatabase.dataChange;
  }

  disconnect() {}
}

