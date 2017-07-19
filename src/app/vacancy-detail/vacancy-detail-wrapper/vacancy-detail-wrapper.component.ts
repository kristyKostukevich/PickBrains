import { Component } from '@angular/core';
import { CardList } from '../../classes/card-list';
import { CandidateCardItem } from '../../interfaces/candidate-card-item';
import { VacancyCardItem } from '../../interfaces/vacancy-card-item';
import { HistoryCardItem } from '../../interfaces/history-card-item';

@Component({
  selector: 'vacancy-detail-wrapper',
  templateUrl: 'vacancy-detail-wrapper.component.html',
  styleUrls: ['vacancy-detail-wrapper.component.scss'],
})
export class VacancyDetailWrapperComponent {
  menuItems: string[] = ['General', 'Assigned candidates', 'Potential candidates', 'History'];
  vacancyName: string = 'Vacancy name';

  vacancyItems: VacancyCardItem[] = [
    {
      projectName: 'Project name',
      location: 'Minsk',
      status: 'In progress',
      date: new Date(2017, 1, 5),
      description: 'Description',
      primarySkill: 'Java',
    },
    {
      projectName: 'Project name',
      location: 'Minsk',
      status: 'In progress',
      date: new Date(2017, 1, 5),
      description: 'Description',
      primarySkill: 'Java',
    },
    {
      projectName: 'Project name',
      location: 'Minsk',
      status: 'In progress',
      date: new Date(2017, 1, 5),
      description: 'Description',
      primarySkill: 'Java',
    },
    {
      projectName: 'Project name',
      location: 'Minsk',
      status: 'In progress',
      date: new Date(2017, 1, 5),
      description: 'Description',
      primarySkill: 'Java',
    },
    {
      projectName: 'Project name',
      location: 'Minsk',
      status: 'In progress',
      date: new Date(2017, 1, 5),
      description: 'Description',
      primarySkill: 'Java',
    },
    {
      projectName: 'Project name',
      location: 'Minsk',
      status: 'In progress',
      date: new Date(2017, 1, 5),
      description: 'Description',
      primarySkill: 'Java',
    },
    {
      projectName: 'Project name',
      location: 'Minsk',
      status: 'In progress',
      date: new Date(2017, 1, 5),
      description: 'Description',
      primarySkill: 'Java',
    },
    {
      projectName: 'Project name',
      location: 'Minsk',
      status: 'In progress',
      date: new Date(2017, 1, 5),
      description: 'Description',
      primarySkill: 'Java',
    },
    {
      projectName: 'Project name',
      location: 'Minsk',
      status: 'In progress',
      date: new Date(2017, 1, 5),
      description: 'Description',
      primarySkill: 'Java',
    },
    {
      projectName: 'Project name',
      location: 'Minsk',
      status: 'In progress',
      date: new Date(2017, 1, 5),
      description: 'Description',
      primarySkill: 'Java',
    },
    {
      projectName: 'Project name',
      location: 'Minsk',
      status: 'In progress',
      date: new Date(2017, 1, 5),
      description: 'Description',
      primarySkill: 'Java',
    },
    {
      projectName: 'Project name',
      location: 'Minsk',
      status: 'In progress',
      date: new Date(2017, 1, 5),
      description: 'Description',
      primarySkill: 'Java',
    },
  ];
  candidateItems: CandidateCardItem[] = [
    {
      candidateName: 'Candidate name',
      status: 'Status',
      email: 'Email',
      location: 'Location',
      primarySkill: 'Primary skill',
      date: new Date(2017, 1, 5),
    },
    {
      candidateName: 'Candidate name',
      status: 'Status',
      email: 'Email',
      location: 'Location',
      primarySkill: 'Primary skill',
      date: new Date(2017, 1, 5),
    },
    {
      candidateName: 'Candidate name',
      status: 'Status',
      email: 'Email',
      location: 'Location',
      primarySkill: 'Primary skill',
      date: new Date(2017, 1, 5),
    },
    {
      candidateName: 'Candidate name',
      status: 'Status',
      email: 'Email',
      location: 'Location',
      primarySkill: 'Primary skill',
      date: new Date(2017, 1, 5),
    },
    {
      candidateName: 'Candidate name',
      status: 'Status',
      email: 'Email',
      location: 'Location',
      primarySkill: 'Primary skill',
      date: new Date(2017, 1, 5),
    },
    {
      candidateName: 'Candidate name',
      status: 'Status',
      email: 'Email',
      location: 'Location',
      primarySkill: 'Primary skill',
      date: new Date(2017, 1, 5),
    },
    {
      candidateName: 'Candidate name',
      status: 'Status',
      email: 'Email',
      location: 'Location',
      primarySkill: 'Primary skill',
      date: new Date(2017, 1, 5),
    },
    {
      candidateName: 'Candidate name',
      status: 'Status',
      email: 'Email',
      location: 'Location',
      primarySkill: 'Primary skill',
      date: new Date(2017, 1, 5),
    },
  ];
  historyItems: HistoryCardItem[] = [
    {
      changeName: 'Status was change',
      userName: 'Gena',
      changeDate: new Date(2016,2,7),
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
      changeName: 'Email was change',
      userName: 'Zosya',
      changeDate: new Date(2020,2,7),
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

  listItems: CardList = new CardList(this.historyItems, 'history');
}
