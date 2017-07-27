import { Component, OnInit } from '@angular/core';
import { HistoryCardItem } from '../interfaces/history-card-item';
import { CandidateGeneralPage } from 'app/classes/candidate-general-page';
import { CardList } from 'app/classes/card-list';
import { FeedbackCardItem } from 'app/interfaces/feedback-card-item';
import { GeneralPage } from '../classes/general-page';
import { HttpService } from './candidate-deteil.service';
import { LinkAndLabel } from '../components/menu/menu.component';

@Component({
  selector: 'candidate-detail',
  templateUrl: 'candidate-detail.component.html',
  styleUrls: ['candidate-detail.component.scss'],
  providers: [HttpService],
})

export class CandidateDetailComponent implements OnInit {
  menuItems: LinkAndLabel[];
  generalModel: CandidateGeneralPage;
  // historyModel: CardList;
  // hrmFeedbackModel: FeedbackCardItem;
  temp: string;
  arrayOfCities: any[];
  sendArrayOfCities: string[];
  arrayOfStatuses: any[];
  sendArrayOfStatuses: string[];
  arrayOfSkills: any[];
  sendArrayOfSkills: string[];
  arrayOfLanguages: any[];
  sendArrayOfLanguages: string[];
  arrayOfOtherSkills: any [];
  sendArrayOfOtherSkills : string[];

  constructor(private httpService: HttpService) {
    this.menuItems = [ {label: 'General', link: '/person-page'},
      {label: 'Feedbacks from Tech ', link: '/person-page'},
      {label: 'Feedbacks from HRM', link: '/person-page'},
      {label: 'History', link: '/person-page'}];
    this.generalModel = new CandidateGeneralPage('', [], [], [], [], [], '');
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
    this.httpService.getData().then(res => {
      this.temp = res.json();
    });

    this.httpService.getStatusData().then(res => {
      this.arrayOfStatuses = res.json();
      let index = 0;
      for (let i of this.arrayOfStatuses) {
        this.sendArrayOfStatuses[index] = i.status;
        index += 1;
      }
    });

    this.httpService.getSkillsData().then(res => {
      this.arrayOfSkills = res.json();
      let index = 0;
      for (let i of this.arrayOfSkills) {
        this.sendArrayOfSkills[index] = i.skillName;
        index += 1;
      }
    });
    this.httpService.getLanguageData().then(res => {
      this.arrayOfLanguages = res.json();
      let index = 0;
      for (let i of this.arrayOfLanguages) {
        this.sendArrayOfLanguages[index] = i.lvl;
        index += 1;
      }
    });
    this.httpService.getOtherSkills().then(res => {
      this.arrayOfOtherSkills = res.json();
      let index = 0;
      for (let i of this.arrayOfOtherSkills) {
        this.sendArrayOfOtherSkills[index] = i.skill;
        index += 1;
      }
    });
    this.httpService.getCitiesData().then(res => {
      this.arrayOfCities = res.json();
      let index = 0;
      for (let i of this.arrayOfCities) {
        this.sendArrayOfCities[index] = i.city;
        index += 1;
      }
      this.generalModel = new CandidateGeneralPage(this.temp, this.sendArrayOfCities, this.sendArrayOfStatuses, this.sendArrayOfSkills, this.sendArrayOfLanguages,this.sendArrayOfOtherSkills,'candidate');
    });

  }
}
