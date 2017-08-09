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
    this.httpService.getData('http://localhost:1337/api/interviews/unclosed/user')
      .subscribe(
        (res) => {
          console.log(res.json());
          this.list = res.json();
          console.log(this.list);
        },
      );
  }
}

export class TechInterview {
  id: number;
  interviewDate: Date;
  done: string;
  candidateName: string;
  vacancyName: string;

  constructor(data: any) {
    this.id = data.id;
    this.interviewDate = data.date;
    this.done = data.done;
    this.candidateName = data.candidateName;
    this.vacancyName = data.vacancyName;
  }
}
