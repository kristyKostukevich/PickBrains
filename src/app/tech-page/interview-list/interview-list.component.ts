import { Component, OnInit } from '@angular/core';
import { HttpService } from 'app/http-service/http-service';

@Component({
  selector: 'interview-list',
  templateUrl: 'interview-list.component.html',
  styleUrls: ['interview-list.component.scss'],
})
export class InterviewListComponent implements OnInit {
  list: TechInterview[];

  constructor(private httpService: HttpService) {
    this.list = [];
  }

  ngOnInit() {
    this.httpService.getData('http://192.168.43.31:1337/api/interviews/unclosed/user')
      .subscribe(
        (res) => {
          this.list = res.json();
        },
      );
  }
}

export class TechInterview {
  id: number;
  date: Date;
  done: string;
  candidateName: string;
  vacancyName: string;

  constructor(data: any) {
    this.id = data.id;
    this.date = data.date;
    this.done = data.done;
    this.candidateName = data.candidateName;
    this.vacancyName = data.vacancyName;
  }
}
