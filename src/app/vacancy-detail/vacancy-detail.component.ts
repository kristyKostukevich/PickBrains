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
