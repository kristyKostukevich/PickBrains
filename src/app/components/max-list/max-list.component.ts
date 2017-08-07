import { Component, OnInit } from '@angular/core';
import { CardList } from 'app/classes/card-list';
import { FeedbackCard } from 'app/classes/feedback-card';
import { HistoryCardItem } from 'app/interfaces/history-card-item';
import { CandidateCardItem } from 'app/interfaces/candidate-card-item';
import { MenuService } from 'app/components/menu/menu.service';
import { ComponentsData } from 'app/interfaces/components-data';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../http-service/http-service';
import { InterviewCard } from 'app/classes/interview-card';

@Component({
  selector: 'max-list',
  templateUrl: 'max-list.component.html',
  styleUrls: ['max-list.component.scss'],
})
export class MaxListComponent implements OnInit {
  initialized: boolean = false;
  list: CardList;
  parentData: ComponentsData;
  currItemType: string;
  candidates: CandidateCardItem[];
  interviews: InterviewCard[];
  feedbacks: FeedbackCard[];

  candidateHistoryItems: HistoryCardItem[] = [
    {
      changeName: 'Email was change',
      userName: 'Zosya',
      changeDate: new Date(2020, 2, 7),
      data: {
        candidateName: 'Candidate name',
        status: 'Status',
        email: 'Email',
        location: 'Location',
        primarySkill: 'Primary skill',
        date: new Date(2017, 1, 5),
      },
      type: 'candidate',
    },
    {
      changeName: 'Email was change',
      userName: 'Zosya',
      changeDate: new Date(2020, 2, 7),
      data: {
        candidateName: 'Candidate name',
        status: 'Status',
        email: 'Email',
        location: 'Location',
        primarySkill: 'Primary skill',
        date: new Date(2017, 1, 5),
      },
      type: 'candidate',
    },
    {
      changeName: 'Email was change',
      userName: 'Zosya',
      changeDate: new Date(2020, 2, 7),
      data: {
        candidateName: 'Candidate name',
        status: 'Status',
        email: 'Email',
        location: 'Location',
        primarySkill: 'Primary skill',
        date: new Date(2017, 1, 5),
      },
      type: 'candidate',
    },
  ];
  vacancyHistoryItems: HistoryCardItem[] = [
    {
      changeName: 'Status was change',
      userName: 'Gena',
      changeDate: new Date(2016, 2, 7),
      data: {
        projectName: 'Project name',
        location: 'Minsk',
        status: 'In progress',
        date: new Date(2017, 1, 5),
        description: 'Description',
        primarySkill: 'Java',
      },
      type: 'vacancy',
    },
    {
      changeName: 'Status was change',
      userName: 'Gena',
      changeDate: new Date(2016, 2, 7),
      data: {
        projectName: 'Project name',
        location: 'Minsk',
        status: 'In progress',
        date: new Date(2017, 1, 5),
        description: 'Description',
        primarySkill: 'Java',
      },
      type: 'vacancy',
    },
    {
      changeName: 'Status was change',
      userName: 'Gena',
      changeDate: new Date(2016, 2, 7),
      data: {
        projectName: 'Project name',
        location: 'Minsk',
        status: 'In progress',
        date: new Date(2017, 1, 5),
        description: 'Description',
        primarySkill: 'Java',
      },
      type: 'vacancy',
    },

  ];

  constructor(private menuService: MenuService, private activateRoute: ActivatedRoute,
              private httpService: HttpService) {
    this.candidates = [];
    this.interviews = [];
    this.feedbacks = [];
  }

  ngOnInit() {
    this.parentData = this.menuService.getData();
    this.currItemType = this.activateRoute.snapshot.url[0].path;
    this.identifyRequestType(this.currItemType);
    if (this.list) {
      this.initialized = true;
    }
  }

  private identifyRequestType(item) {
    switch (item) {
      case 'feedbacks-from-tech':
        this.currItemType = 'feedbacks';
        this.getFeedbackFromTech();
        break;
      case 'feedbacks-from-hrm':
        this.currItemType = 'feedbacks';
        this.getFeedbackFromHrm();
        break;
      case 'interviews':
        this.currItemType = 'interviews';
        this.getInterviews();
        break;
      case 'history':
        this.currItemType = 'history';
        if (this.parentData.type === 'candidate') {
          this.getCandidateHistory();
        } else {
          this.getVacancyHistory();
        }
        break;
      case 'assigned-candidates':
        this.currItemType = 'candidates';
        this.list = new CardList([], '');
        this.getAssignedCandidates();
        break;
      case 'potential-candidates':
        this.currItemType = 'candidates';
        this.list = new CardList([], '');
        this.getPotentialCandidates();
        break;
      default:
        alert('error');
    }
  }

  getFeedbackFromTech() {
    this.list = new CardList(this.feedbacks);
    this.httpService.getData(`http://192.168.43.31:1337/api/candidate/ts-feedbacks?id=${this.parentData.id}`)
      .subscribe(
        (res) => {
          const temp = res.json();
          for (const i of temp) {
            this.feedbacks.push({
              id: i.id,
              date: new Date(i.date),
              skillName: i.skillName,
              userName: i.userName,
              vacancyName: i.vacancyName,
            });
          }
          this.list = new CardList(this.feedbacks);
          console.log(this.list);
        },
        (error) => {
          console.log(error);
        });
  }

  getFeedbackFromHrm() {
    this.list = new CardList(this.feedbacks);
    this.httpService.getData(`http://192.168.43.31:1337/api/candidate/hrm-feedbacks?id=${this.parentData.id}`)
      .subscribe(
        (res) => {
          const temp = res.json();
          for (const i of temp) {
            this.feedbacks.push({
              id: i.id,
              date: new Date(i.date),
              userName: i.userName,
              vacancyName: i.vacancyName,
              skillName: null,
            });
          }
          this.list = new CardList(this.feedbacks);
          console.log(this.list);
        },
        (error) => {
          console.log(error);
        });
  }

  getInterviews() {
    this.list = new CardList(this.interviews);
    this.httpService.getData(`http://192.168.43.31:1337/api/interviews/candidate?id=${this.parentData.id}`)
      .subscribe(
        (res) => {
          const temp = res.json();
          for (const i of temp) {
            this.interviews.push({
              candidateId: i.candidateId,
              vacancyId: i.vacancyId,
              interviewId: i.id,
              type: i.type,
              date: new Date(i.date),
              status: i.done,
              candidateName: i.candidateName,
              userName: i.userName,
              vacancyName: i.vacancyName,
            });
          }
          this.list = new CardList(this.interviews);
          console.log(this.list);
        },
        (error) => {
          console.log(error);
        });
  }

  getCandidateHistory() {
    this.list = new CardList(this.candidateHistoryItems);
  }

  getVacancyHistory() {
    this.list = new CardList(this.vacancyHistoryItems);
  }

  getAssignedCandidates() {
    this.httpService.getData(`http://192.168.43.31:1337/api/vacancies/${this.parentData.id}/assigned`)
      .subscribe(
        (res) => {
          const temp = res.json();
          for (const i of temp) {
            this.candidates.push({
              candidateName: i.name,
              skillName: i.skillName,
              city: i.city,
              status: i.status,
              contactDate: i.contactDate,
              email: i.email,
              id: i.id,
            });
          }
          this.list = new CardList(this.candidates);
        },
        (error) => {
          console.log(error);
        });
  }

  getPotentialCandidates() {
    this.httpService.getData(`http://192.168.43.31:1337/api/vacancies/${this.parentData.id}/candidates`)
      .subscribe((res) => {
          const temp = res.json();
          for (const i of temp) {
            this.candidates.push({
              candidateName: i.name,
              skillName: i.skillName,
              city: i.city,
              status: i.status,
              contactDate: i.contactDate,
              email: i.email,
              id: i.id,
            });
          }
          this.list = new CardList(this.candidates);
        },
        (error) => {
          console.log(error);
        });
  }

  isVacancies(): boolean {
    return this.currItemType === 'vacancies';
  }

  isCandidates(): boolean {
    return this.initialized && this.currItemType === 'candidates';
  }

  isHistory(): boolean {
    return this.currItemType === 'history';
  }

  isFeedbacks(): boolean {
    return this.currItemType === 'feedbacks';
  }

  isInterview(): boolean {
    return this.initialized && this.currItemType === 'interviews';
  }
}
