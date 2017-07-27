import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CandidateGeneralPage } from 'app/classes/candidate-general-page';
import { VacancyGeneralPage } from 'app/classes/vacancy-general-page';

@Component({
  selector: 'general',
  templateUrl: 'general.component.html',
  styleUrls: ['general.component.scss'],
})

export class GeneralComponent implements OnInit, OnDestroy {
  model: any;
  id: number;
  type: string;
  responseCandidate = {
    ru_first_name: 'вася',
    ru_second_name: 'пупкин',
    linkedin: 'someidurl',
    skype: '61132165ddsfd',
    phone: '+375222554928',
    city: 'Belarus, Minsk',
    exp_year: '2016-08-31T21:00:00.000Z',
    salary_wish: 500,
    lvl: 'Upper-Intermediate (B2)',
    contact_date: '2017-07-11T12:53:38.000Z',
    skill_name: '.NET',
    primary_skill_lvl: 1,
    status: 'Job offer accepted',
    first_name: 'dsfds',
    second_name: 'cvocvidvudsvbsdvsdv',
    emails: [
      'secTHATMAILmail@gmail.com',
    ],
    sec_skills: [
      {
        id: 3,
        skill_name: 'BI',
        lvl: 2,
      },
      {
        id: 15,
        skill_name: 'Ruby on Rails',
        lvl: 3,
      },
    ],
    other_skills: [
      {
        skill: 'Programming basics',
        id: 1,
      },
      {
        skill: 'Networking',
        id: 2,
      },
    ],
  };
  responseVacancy = {
    id: 2,
    name: 'Foooo',
    requestDate: '2017-1-1',
    startDate: '2017-2-2',
    skillName: 'Android',
    primarySkillLvl: 9,
    city: 'Belarus, Vitebsk',
    status: 'On hold',
    secondarySkills: [
      {
        skillName: 'BI',
        lvl: 2,
      },
      {
        skillName: 'Ruby on Rails',
        lvl: 3,
      },
    ],
    otherSkills: [
      {
        skill: 'Programming basics',
        id: 1,
      },
      {
        skill: 'Networking',
        id: 2,
      },
    ],
  };

  private querySubscription: Subscription;

  constructor(private route: ActivatedRoute) {
    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
        this.type = queryParam['type'];
        this.id = queryParam['id'];
      },
    );
    console.log('general');
    console.log(this.type);
    console.log(this.id);
  }

  ngOnInit() {
    switch (this.type) {
      case 'candidate':
        this.model = new CandidateGeneralPage(this.responseCandidate);
        break;
      case 'vacancy':
        this.model = new VacancyGeneralPage(this.responseVacancy);
        break;
      default:
        break;
    }
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }

  isCandidate(): boolean {
    return this.type === 'candidate';
  }

  isVacancy(): boolean {
    return this.type === 'vacancy';
  }

  isFeedbackFromHr(): boolean {
    return this.model.type === 'feedbackFromHr';
  }

  isFeedbackFromTech(): boolean {
    return this.model.type === 'feedbackFromTech';
  }
}
