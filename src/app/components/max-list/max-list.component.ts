import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CardList } from 'app/classes/card-list';
import { FeedbackCardItem } from 'app/interfaces/feedback-card-item';
import { HistoryCardItem } from 'app/interfaces/history-card-item';
import { CandidateCardItem } from 'app/interfaces/candidate-card-item';

@Component({
  selector: 'list',
  templateUrl: 'max-list.component.html',
  styleUrls: ['max-list.component.scss'],
})
export class MaxListComponent implements OnChanges, OnInit {
  list: CardList;
  id: number;
  type: string;
  itemType: string;

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
      skill_name: 'Primary skill',
      contact_date: new Date(2017, 1, 5),
      id: 1,
    },
    {
      name: 'Candidate name',
      status: 'Status',
      email: 'Email',
      city: 'city',
      skill_name: 'Primary skill',
      contact_date: new Date(2017, 1, 5),
      id: 2,
    },
    {
      name: 'Candidate name',
      status: 'Status',
      email: 'Email',
      city: 'city',
      skill_name: 'Primary skill',
      contact_date: new Date(2017, 1, 5),
      id: 3,
    },
    {
      name: 'Candidate name',
      status: 'Status',
      email: 'Email',
      city: 'city',
      skill_name: 'Primary skill',
      contact_date: new Date(2017, 1, 5),
      id: 4,
    },
    {
      name: 'Candidate name',
      status: 'Status',
      email: 'Email',
      city: 'city',
      skill_name: 'Primary skill',
      contact_date: new Date(2017, 1, 5),
      id: 5,
    },
    {
      name: 'Candidate name',
      status: 'Status',
      email: 'Email',
      city: 'city',
      skill_name: 'Primary skill',
      contact_date: new Date(2017, 1, 5),
      id: 6,
    },
    {
      name: 'Candidate name',
      status: 'Status',
      email: 'Email',
      city: 'city',
      skill_name: 'Primary skill',
      contact_date: new Date(2017, 1, 5),
      id: 7,
    },
    {
      name: 'Candidate name',
      status: 'Status',
      email: 'Email',
      city: 'city',
      skill_name: 'Primary skill',
      contact_date: new Date(2017, 1, 5),
      id: 8,
    },
  ];
  vacancyPotentialCandidates: CandidateCardItem[] = [
    {
      name: 'Dima Ivanov',
      status: 'Status',
      email: 'Email',
      city: 'city',
      skill_name: 'Primary skill',
      contact_date: new Date(2017, 1, 5),
      id: 1,
    },
    {
      name: 'Candidate name',
      status: 'Status',
      email: 'Email',
      city: 'city',
      skill_name: 'Primary skill',
      contact_date: new Date(2017, 1, 5),
      id: 2,
    },
    {
      name: 'Candidate name',
      status: 'Status',
      email: 'Email',
      city: 'city',
      skill_name: 'Primary skill',
      contact_date: new Date(2017, 1, 5),
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

  private initialized: boolean = true; //не забыть поменять
  private querySubscription: Subscription;

  constructor(private route: ActivatedRoute) {
    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
        this.type = queryParam['type'];
        this.id = queryParam['id'];
        this.itemType = queryParam['itemType'];
      },
    );
    this.setItemType(this.itemType);
  }

  ngOnInit() {

  }

  ngOnChanges() {
    if (this.list)
      this.initialized = true;
  }

  private setItemType(item) {
    switch (item) {
      case 'Feedbacks From Tech':
        this.itemType = 'feedbacks';
        this.list = new CardList(this.candidateFeedbacksItems);
        break;
      case 'Feedbacks From HRm':
        this.itemType = 'feedbacks';
        this.list = new CardList(this.candidateFeedbacksItems);
        break;
      case 'History':
        this.itemType = 'history';
        if (this.type = 'candidate') {
          this.list = new CardList(this.candidateHistoryItems);
        } else {
          this.list = new CardList(this.vacancyHistoryItems);
        }
        break;
      case 'Assigned candidates':
        this.itemType = 'candidates';
        this.list = new CardList(this.vacancyAssignedCandidates);
        break;
      case 'Potential candidates':
        this.itemType = 'candidates';
        this.list = new CardList(this.vacancyPotentialCandidates);
        break;
      default:
        alert('error');
    }
  }

  isVacancies(): boolean {
    return this.initialized && this.itemType === 'vacancies';
  }

  isCandidates(): boolean {
    return this.initialized && this.itemType === 'candidates';
  }

  isHistory(): boolean {
    return this.initialized && this.itemType === 'history';
  }

  isFeedbacks(): boolean {
    return this.initialized && this.itemType === 'feedbacks';
  }
}
