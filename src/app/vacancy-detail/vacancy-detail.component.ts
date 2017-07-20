import { Component } from '@angular/core';
import { CardList } from '../classes/card-list';
import { CandidateCardItem } from '../interfaces/candidate-card-item';
import { VacancyCardItem } from '../interfaces/vacancy-card-item';
import { HistoryCardItem } from '../interfaces/history-card-item';
import { GeneralPage } from '../classes/general-page';

@Component({
  selector: 'vacancy-detail',
  templateUrl: 'vacancy-detail.component.html',
  styleUrls: ['vacancy-detail.component.scss'],
})
export class VacancyDetailComponent {
  menuItems: string[] = ['General', 'Assigned candidates', 'Potential candidates', 'History'];
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
  listItems: CardList = new CardList(this.candidateItems, 'candidates');

  array = [
    {
      value: 'Sobaca Project',
      placeholder: 'Project Name',
    },
    {
      placeholder: 'Location',
      value: 'Minsk, Belarus',
      options: [
        'Minsk, Belarus',
        'loc2',
        'loc3',
      ],
    },
    {
      placeholder: 'Request date',
      value: new Date(2105, 1, 1),
    },
    {
      placeholder: 'Project start date',
      value: new Date(2005, 5, 1),
    },
    {
      placeholder: 'Status',
      value: 'In Progress',
      options: [
        'In Progress',
        'Closed',
        'loc3',
      ],
    },
    {
      value: 'https://job.tut.by',
      placeholder: 'Resume Link',
    },
    {
      placeholder: 'Primary Skill',
      value: 'Angular',
      options: [
        'Angular',
        'loc2',
        'loc3',
      ],
    },
    {
      placeholder: 'Work Experience',
      value: new Date(2019, 5, 11),
    },
    {
      placeholder: 'English Level',
      value: 'Intermediate',
      options: [
        'Advanced',
        'Elementary',
        'Intermediate',
      ],
    },
    {
      placeholder: 'Other Skill',
      value: 'HTML5/CSS3',
    },
    {
      placeholder: 'Other Skill',
      value: 'JavaScript',
    },
    {
      placeholder: 'Description',
      value: 'Free coffee',
    },
  ];
  model: GeneralPage = new GeneralPage(this.array);
}
