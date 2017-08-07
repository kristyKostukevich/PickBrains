import { Component, OnInit } from '@angular/core';
import { CandidateGeneralPage } from 'app/classes/candidate-general-page';
import { VacancyGeneralPage } from 'app/classes/vacancy-general-page';
import { MenuService } from '../menu/menu.service';
import { ComponentsData } from 'app/interfaces/components-data';
import { HttpService } from '../../http-service/http-service';

@Component({
  selector: 'general',
  templateUrl: 'general-view.component.html',
  styleUrls: ['general-view.component.scss'],
})
export class GeneralViewComponent implements OnInit {
  initialized: boolean = false;
  parentData: ComponentsData;
  model: any;

  temp: string;
  arrayOfCities: any[];
  sendArrayOfCities: string[];
  arrayOfStatuses: any[];
  sendArrayOfStatuses: string[];
  arrayOfSkills: any[];
  sendArrayOfSkills: string[];
  arrayOfLanguages: any[];
  sendArrayOfLanguages: string[];
  arrayOfOtherSkills: any[];
  sendArrayOfOtherSkills: string[];

  constructor(private menuService: MenuService, private httpService: HttpService) {
    this.arrayOfCities = [];
    this.sendArrayOfCities = [];
    this.temp = '';
    this.arrayOfStatuses = [];
    this.sendArrayOfStatuses = [];
    this.arrayOfSkills = [];
    this.sendArrayOfSkills = [];
    this.arrayOfLanguages = [];
    this.sendArrayOfLanguages = [];
    this.arrayOfOtherSkills = [];
    this.sendArrayOfOtherSkills = [];
  }

  ngOnInit() {
    this.parentData = this.menuService.getData();
    this.identifyRequestType(this.parentData.type);
    if (this.model)
      this.initialized = true;
  }

  private identifyRequestType(item) {
    switch (item) {
      case 'candidate':
        this.model = new CandidateGeneralPage('', [], [], [], [], [], '');
        this.getCandidateData();
        break;
      case 'vacancy':
        this.model = new VacancyGeneralPage('', [], [], [], [], [], '');
        this.getVacancyData();
        break;
      default:
        alert('error');
        break;
    }
  }

  getCandidateData() {
    this.httpService.getData('http://192.168.43.8:1488/api/meta-data/candidate-statuses')
      .subscribe((res) => {
        this.arrayOfStatuses = res.json();
        let index = 0;
        for (let i of this.arrayOfStatuses) {
          this.sendArrayOfStatuses[index] = i.status;
          index += 1;
        }
      });

    this.httpService.getData('http://192.168.43.8:1488/api/meta-data/skills').subscribe((res) => {
      this.arrayOfSkills = res.json();
      let index = 0;
      for (let i of this.arrayOfSkills) {
        this.sendArrayOfSkills[index] = i.skillName;
        index += 1;
      }
    });
    this.httpService.getData('http://192.168.43.8:1488/api/meta-data/english-levels')
      .subscribe((res) => {
        this.arrayOfLanguages = res.json();
        let index = 0;
        for (let i of this.arrayOfLanguages) {
          this.sendArrayOfLanguages[index] = i.lvl;
          index += 1;
        }
      });
    this.httpService.getData('http://192.168.43.8:1488/api/meta-data/locations').subscribe((res) => {
      this.arrayOfCities = res.json();
      let index = 0;
      for (let i of this.arrayOfCities) {
        this.sendArrayOfCities[index] = i.city;
        index += 1;
      }
    });
    this.httpService.getData('http://192.168.43.8:1488/api/meta-data/other-skills')
      .subscribe((res) => {
        this.arrayOfOtherSkills = res.json();
        let index = 0;
        for (let i of this.arrayOfOtherSkills) {
          this.sendArrayOfOtherSkills[index] = i.skill;
          index += 1;
        }
      });
    this.httpService
      .getData(`http://192.168.43.8:1488/api/candidates?id=${this.parentData.id}`)
      .subscribe((res) => {
        this.temp = res.json();
        this.model = new CandidateGeneralPage(this.temp, this.sendArrayOfCities, this.sendArrayOfStatuses, this.sendArrayOfSkills, this.sendArrayOfLanguages,this.sendArrayOfOtherSkills,'candidate');
      });
  }

  getVacancyData() {
    this.httpService.getData('http://192.168.43.8:1488/api/meta-data/vacancy-statuses')
      .subscribe((res) => {
        this.arrayOfStatuses = res.json();
        let index = 0;
        for (let i of this.arrayOfStatuses) {
          this.sendArrayOfStatuses[index] = i.status;
          index += 1;
        }
      });

    this.httpService.getData('http://192.168.43.8:1488/api/meta-data/skills').subscribe((res) => {
      this.arrayOfSkills = res.json();
      let index = 0;
      for (const i of this.arrayOfSkills) {
        this.sendArrayOfSkills[index] = i.skillName;
        index += 1;
      }
    });
    this.httpService.getData('http://192.168.43.8:1488/api/meta-data/english-levels')
      .subscribe((res) => {
        this.arrayOfLanguages = res.json();
        let index = 0;
        for (let i of this.arrayOfLanguages) {
          this.sendArrayOfLanguages[index] = i.lvl;
          index += 1;
        }
      });
    this.httpService.getData('http://192.168.43.8:1488/api/meta-data/locations')
      .subscribe((res) => {
        this.arrayOfCities = res.json();
        let index = 0;
        for (let i of this.arrayOfCities) {
          this.sendArrayOfCities[index] = i.city;
          index += 1;
        }
      });
    this.httpService.getData('http://192.168.43.8:1488/api/meta-data/other-skills')
      .subscribe((res) => {
        this.arrayOfOtherSkills = res.json();
        let index = 0;
        for (let i of this.arrayOfOtherSkills) {
          this.sendArrayOfOtherSkills[index] = i.skill;
          index += 1;
        }
      });
    this.httpService
      .getData(`http://192.168.43.8:1488/api/vacancies/${this.parentData.id}`)
      .subscribe((data) => {
        this.temp = data.json();
        this.model = new VacancyGeneralPage(this.temp, this.sendArrayOfCities, this.sendArrayOfStatuses, this.sendArrayOfSkills, this.sendArrayOfLanguages, this.sendArrayOfOtherSkills, 'vacancy');
      });
  }

  isCandidate(): boolean {
    return this.initialized && this.model.type === 'candidate';
  }

  isVacancy(): boolean {
    return this.initialized && this.model.type === 'vacancy';
  }

  isFeedbackFromHr(): boolean {
    return this.parentData.type === 'feedbackFromHr';
  }

  isFeedbackFromTech(): boolean {
    return this.parentData.type === 'feedbackFromTech';
  }
}
