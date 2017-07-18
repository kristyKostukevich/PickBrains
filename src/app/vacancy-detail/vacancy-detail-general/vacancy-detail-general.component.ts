import { Component } from '@angular/core';

@Component({
  selector: 'vacancy-detail-general',
  templateUrl: 'vacancy-detail-general.component.html',
  styleUrls: ['vacancy-detail-general.component.scss'],
})
export class VacancyDetailContentComponent {

  generalItems = [
    {
      placeholder: 'Project Name',
      value: 'PickBrains',
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
      value: '01/07/2017',
    },
    {
      placeholder: 'Project start date',
      value: '11/07/2017',
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
      value: '01/01/2015',
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
    {
      placeholder: 'Resume Link',
      value: 'https://job.tut.by',
    },
  ];
}
