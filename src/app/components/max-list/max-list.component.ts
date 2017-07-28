import { Component, OnInit } from '@angular/core';
import { CardList } from 'app/classes/card-list';
import { FeedbackCardItem } from 'app/interfaces/feedback-card-item';
import { HistoryCardItem } from 'app/interfaces/history-card-item';
import { CandidateCardItem } from 'app/interfaces/candidate-card-item';
import { MenuService } from 'app/components/menu/menu.service';
import { ComponentsData } from 'app/interfaces/components-data';

@Component({
  selector: 'max-list',
  templateUrl: 'max-list.component.html',
  styleUrls: ['max-list.component.scss'],
})
export class MaxListComponent implements OnInit {
  list: CardList;
  parentData: ComponentsData;

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
  candidateFeedbacksItems: FeedbackCardItem[] = [
    {
      title: 'Feedback from Vasya',
      vacancy: 'Sobaca project',
      date: new Date(2017, 1, 1),
    },
    {
      title: 'Feedback from Vasya',
      vacancy: 'Sobaca project',
      date: new Date(2017, 1, 1),
    }, {
      title: 'Feedback from Vasya',
      vacancy: 'Sobaca project',
      date: new Date(2017, 1, 1),
    }, {
      title: 'Feedback from Vasya',
      vacancy: 'Sobaca project',
      date: new Date(2017, 1, 1),
    }, {
      title: 'Feedback from Vasya',
      vacancy: 'Sobaca project',
      date: new Date(2017, 1, 1),
    },
  ];

  vacancyAssignedCandidates: CandidateCardItem[] = [
    {
      name: 'Candidate name',
      status: 'Status',
      email: 'Email',
      city: 'city',
      skillName: 'Primary skill',
      contactDate: new Date(2017, 1, 5),
      id: 1,
    },
    {
      name: 'Candidate name',
      status: 'Status',
      email: 'Email',
      city: 'city',
      skillName: 'Primary skill',
      contactDate: new Date(2017, 1, 5),
      id: 2,
    },
    {
      name: 'Candidate name',
      status: 'Status',
      email: 'Email',
      city: 'city',
      skillName: 'Primary skill',
      contactDate: new Date(2017, 1, 5),
      id: 3,
    },
    {
      name: 'Candidate name',
      status: 'Status',
      email: 'Email',
      city: 'city',
      skillName: 'Primary skill',
      contactDate: new Date(2017, 1, 5),
      id: 4,
    },
    {
      name: 'Candidate name',
      status: 'Status',
      email: 'Email',
      city: 'city',
      skillName: 'Primary skill',
      contactDate: new Date(2017, 1, 5),
      id: 5,
    },
    {
      name: 'Candidate name',
      status: 'Status',
      email: 'Email',
      city: 'city',
      skillName: 'Primary skill',
      contactDate: new Date(2017, 1, 5),
      id: 6,
    },
    {
      name: 'Candidate name',
      status: 'Status',
      email: 'Email',
      city: 'city',
      skillName: 'Primary skill',
      contactDate: new Date(2017, 1, 5),
      id: 7,
    },
    {
      name: 'Candidate name',
      status: 'Status',
      email: 'Email',
      city: 'city',
      skillName: 'Primary skill',
      contactDate: new Date(2017, 1, 5),
      id: 8,
    },
  ];
  vacancyPotentialCandidates: CandidateCardItem[] = [
    {
      name: 'Dima Ivanov',
      status: 'Status',
      email: 'Email',
      city: 'city',
      skillName: 'Primary skill',
      contactDate: new Date(2017, 1, 5),
      id: 1,
    },
    {
      name: 'Candidate name',
      status: 'Status',
      email: 'Email',
      city: 'city',
      skillName: 'Primary skill',
      contactDate: new Date(2017, 1, 5),
      id: 2,
    },
    {
      name: 'Candidate name',
      status: 'Status',
      email: 'Email',
      city: 'city',
      skillName: 'Primary skill',
      contactDate: new Date(2017, 1, 5),
      id: 3,
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


  constructor(private menuService: MenuService) {
  }

  ngOnInit() {
    this.parentData = this.menuService.getData();
    this.identifyRequestType(this.parentData.itemType);
  }

  private identifyRequestType(item) {
    switch (item) {
      case 'Feedbacks From Tech':
        this.parentData.itemType = 'feedbacks';
        this.getFeedbackFromTech();
        break;
      case 'Feedbacks From HRm':
        this.parentData.itemType = 'feedbacks';
        this.getFeedbackFromHrm();
        break;
      case 'History':
        this.parentData.itemType = 'history';
        if (this.parentData.type = 'candidate') {
          this.getCandidateHistory();
        } else {
          this.getVacancyHistory();
        }
        break;
      case 'Assigned candidates':
        this.parentData.itemType = 'candidates';
        this.getAssignedCandidates();
        break;
      case 'Potential candidates':
        this.parentData.itemType = 'candidates';
        this.getPotentialCandidates();
        break;
      default:
        alert('error');
    }
  }

  getFeedbackFromHrm() {
    this.list = new CardList(this.candidateFeedbacksItems);
  }

  getCandidateHistory() {
    this.list = new CardList(this.candidateHistoryItems);
  }

  getVacancyHistory() {
    this.list = new CardList(this.vacancyHistoryItems);
  }

  getAssignedCandidates() {
    this.list = new CardList(this.vacancyAssignedCandidates);
  }

  getPotentialCandidates() {
    this.list = new CardList(this.vacancyPotentialCandidates);
  }

  getFeedbackFromTech() {
    this.list = new CardList(this.candidateFeedbacksItems);
  }

  isVacancies(): boolean {
    return this.parentData.itemType === 'vacancies';
  }

  isCandidates(): boolean {
    return this.parentData.itemType === 'candidates';
  }

  isHistory(): boolean {
    return this.parentData.itemType === 'history';
  }

  isFeedbacks(): boolean {
    return this.parentData.itemType === 'feedbacks';
  }
}
