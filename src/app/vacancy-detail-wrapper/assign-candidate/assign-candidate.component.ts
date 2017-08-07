import { Component, OnInit } from '@angular/core';
import { AssignPage } from '../../classes/assign-page';
import { MenuService } from '../../components/menu/menu.service';
import { ComponentsData } from '../../interfaces/components-data';
import { HttpService } from '../../http-service/http-service';

@Component({
  selector: 'assign-candidate',
  templateUrl: 'assign-candidate.component.html',
  styleUrls: ['assign-candidate.component.scss'],
})

export class AssignCandidateComponent implements OnInit {
  model: AssignPage;
  data: any;
  interviewTypes: string[];
  hrmInterviewers: any[];
  hrmOptions: string[];
  techInterviewers: any[];
  techOptions: string[];
  parentData: ComponentsData;
  candidates: any[];
  candidateOptions: string[];
  users: any[];

  constructor(private menuService: MenuService, private httpService: HttpService) {
    this.interviewTypes = ['Technical interview', 'HRM interview'];
    this.candidates = [];
    this.users = [];
    this.data = {
      interviewType: 'HRM interview',
      interviewer: '',
      value: '',
      date: '',
      time: '',
    };
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
    this.getData();
  }

  getTechInterviewers() {
    this.httpService.getData('http://192.168.43.8:1488/api/users?type=TECH')
      .subscribe((res) => {
        const temp = res.json();
        for (const i of temp) {
          this.users.push({
            name: `${i.first_name} ${i.second_name}`,
            id: i.id,
          });
        }
        this.techInterviewers = this.users;
        this.techOptions = this.users.map((item) => {
          return item.name;
        });
        this.users = [];
      });
  }

  getHrmInterviewers() {
    this.httpService.getData('http://192.168.43.8:1488/api/users?type=HRM')
      .subscribe((res) => {
        const temp = res.json();
        for (const i of temp) {
          this.users.push({
            name: `${i.first_name} ${i.second_name}`,
            id: i.id,
          });
        }
        this.hrmInterviewers = this.users;
        this.hrmOptions = this.users.map((item) => {
          return item.name;
        });
        this.users = [];
      });
  }

  getData() {
    this.model = new AssignPage('', [], [], [], '');
    this.getHrmInterviewers();
    this.getTechInterviewers();
    this.getPotentialCandidates();
  }

  getPotentialCandidates() {
    this.httpService.getData(`http://192.168.43.8:1488/api/vacancies/${this.parentData.id}/candidates`)
      .subscribe((res) => {
        const temp = res.json();
        for (const item of temp) {
          this.candidates.push({
            name: item.name,
            id: item.id,
          });
        }
        this.candidateOptions = this.candidates.map((item) => {
          return item.name;
        });
        this.model = new AssignPage(
          this.data,
          this.interviewTypes,
          this.hrmOptions,
          this.candidateOptions,
          this.parentData.type,
        );
        console.log('model');
        console.log(this.model);
      });
  }

  submit() {
    const currCandIndex = this.candidateOptions.indexOf(this.model.value.value);
    const currDate = this.model.date.value.getTime() + this.getSeconds(this.model.time.value);

    let currUserId;
    const index = this.hrmOptions.indexOf(this.model.interviewer.value);
    if (index === -1) {
      const currUserIndex = this.techOptions.indexOf(this.model.interviewer.value);
      currUserId = this.techInterviewers[currUserIndex].id;
    } else {
      currUserId = this.hrmInterviewers[index].id;
    }

    this.httpService.postData({
      candidateId: this.candidates[currCandIndex].id,
      vacancyId: this.parentData.id,
      userId: currUserId,
      date: currDate,
    }, 'http://192.168.43.8:1488/api/interviews/new').subscribe();
  }

  private getSeconds(item: string) {
    const sec = item.split(':');
    return ((+sec[0]) * 3600 + (+sec[1]) * 60) * 1000;
  }
}
