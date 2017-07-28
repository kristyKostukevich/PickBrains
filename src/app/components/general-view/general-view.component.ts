import { Component, OnInit } from '@angular/core';
import { CandidateGeneralPage } from 'app/classes/candidate-general-page';
import { VacancyGeneralPage } from 'app/classes/vacancy-general-page';
import { MenuService } from '../menu/menu.service';
import { ComponentsData } from 'app/interfaces/components-data';

@Component({
  selector: 'general',
  templateUrl: 'general-view.component.html',
  styleUrls: ['general-view.component.scss'],
})
export class GeneralViewComponent implements OnInit {
  parentData: ComponentsData;
  model: any;

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

  constructor(private menuService: MenuService) {
  }

  ngOnInit() {
    this.parentData = this.menuService.getData();
    this.identifyRequestType(this.parentData.type);
  }

  private identifyRequestType(item) {
    switch (item) {
      case 'candidate':
        this.getCandidateData();
        break;
      case 'vacancy':
        this.getVacancyData();
        break;
      default:
        alert('error');
        break;
    }
  }

  getCandidateData() {
    this.model = new CandidateGeneralPage('', [], [], [], [], [], '');
  }

  getVacancyData() {
    this.model = new VacancyGeneralPage(this.responseVacancy);
  }

  isCandidate(): boolean {
    return this.parentData.type === 'candidate';
  }

  isVacancy(): boolean {
    return this.parentData.type === 'vacancy';
  }

  isFeedbackFromHr(): boolean {
    return this.parentData.type === 'feedbackFromHr';
  }

  isFeedbackFromTech(): boolean {
    return this.parentData.type === 'feedbackFromTech';
  }
}
