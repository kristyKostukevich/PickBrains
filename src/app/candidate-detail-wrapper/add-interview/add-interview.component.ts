import { Component, OnInit } from '@angular/core';
import { AssignPage } from '../../classes/assign-page';
import { MenuService } from '../../components/menu/menu.service';
import { ComponentsData } from '../../interfaces/components-data';
import { HttpService } from '../../http-service/http-service';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'add-interview',
  templateUrl: 'add-interview.component.html',
  styleUrls: ['add-interview.component.scss'],
})

export class AddInterviewComponent implements OnInit {
  model: AssignPage;
  parentData: ComponentsData;
  interviewTypes: string[];

  hrmMap: Map<string, number>;
  techMap: Map<string, number>;
  vacancyMap: Map<string, number>;

  techOptions: string[];
  hrmOptions: string[];

  constructor(private menuService: MenuService,
              private httpService: HttpService,
              private router: Router,
              private currentActivatedRoute: ActivatedRoute) {
    this.interviewTypes = ['Technical interview', 'HRM interview'];
    this.hrmMap = new Map();
    this.techMap = new Map();
    this.vacancyMap = new Map();
  }

  modelChange(item) {
    if (item.value === 'HRM interview') {
      this.model.setInterviewerOptions(this.hrmOptions);
    } else {
      this.model.setInterviewerOptions(this.techOptions);
    }
  }

  ngOnInit() {
    this.parentData = this.menuService.getData();
    this.model = new AssignPage([], [], [], '');
    this.getData();
  }

  private getSeconds(item: string) {
    const sec = item.split(':');
    return ((+sec[0]) * 3600 + (+sec[1]) * 60) * 1000;
  }

  getTechData(param) {
    param.forEach(item => this.techMap.set(`${item.first_name} ${item.second_name}`, item.id));
  }

  getHrmData(param) {
    param.forEach(item => this.hrmMap.set(`${item.first_name} ${item.second_name}`, item.id));
  }

  getVacancyData(param) {
    param.forEach(item => this.vacancyMap.set(item.name, item.id));
  }

  createModel() {
    this.hrmOptions = Array.from(this.hrmMap.keys());
    this.techOptions = Array.from(this.techMap.keys());

    this.model = new AssignPage(
      this.interviewTypes,
      this.hrmOptions,
      Array.from(this.vacancyMap.keys()),
      this.parentData.type,
    );
  }

  getRequests() {
    const id = this.parentData.id;
    return Observable.forkJoin(
      this.httpService.getData('http://192.168.43.31:1337/api/users?type=TECH')
        .map((res: Response) => res.json()),
      this.httpService.getData('http://192.168.43.31:1337/api/users?type=HRM')
        .map((res: Response) => res.json()),
      this.httpService.postData({}, `http://192.168.43.31:1337/api/vacancies`)
        .map((res: Response) => res.json()),
    );
  }

  getData() {
    this.getRequests().subscribe(
      (data) => {
        this.getTechData(data[0]);
        this.getHrmData(data[1]);
        this.getVacancyData(data[2]);
        this.createModel();
        console.log(this.model);
      },
      (error) => {
        console.log(error);
      });
  }

  submit() {
    let currUserId;
    if (this.model.typeOfInterview.value === 'HRM interview') {
      currUserId = this.hrmMap.get(this.model.interviewer.value);
    } else {
      currUserId = this.techMap.get(this.model.interviewer.value);
    }

    const currDate = this.model.date.value.getTime() + this.getSeconds(this.model.time.value);

    this.httpService.postData(
      {
        candidateId: this.parentData.id,
        vacancyId: this.vacancyMap.get(this.model.item.value),
        userId: currUserId,
        date: currDate,
      },
      'http://192.168.43.31:1337/api/interviews/new')
      .subscribe(
        (res) => {
          if (res.status === 201) {
            this.router
              .navigate(['../interviews'], {relativeTo: this.currentActivatedRoute});
          }
          console.log(res.status);
        },
        (error) => {
          console.log(error);
        });
  }
}
