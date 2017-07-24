import { Component, OnInit } from '@angular/core';
import { GeneralPage } from '../classes/general-page';

import { LinkAndLabel } from '../components/menu/menu.component';
import { HttpService } from '../http-service/http-service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'vacancy-detail',
  templateUrl: 'vacancy-detail.component.html',
  styleUrls: ['vacancy-detail.component.scss'],
  providers: [HttpService],
})
export class VacancyDetailComponent implements OnInit {
  menuItems: LinkAndLabel [];
  temp: string;
  model: GeneralPage;
  arrayOfCities: any[];
  sendArrayOfCities: string[];
  arrayOfStatuses: any[];
  sendArrayOfStatuses: string[];
  arrayOfSkills: any[];
  sendArrayOfSkills: string[];
  arrayOfLanguages: any[];
  sendArrayOfLanguages: string[];

  constructor(private httpService: HttpService, private route:ActivatedRoute) {

    this.menuItems = [{label: 'General', link: '/person-page'},
      {label: 'Assigned candidates ', link: '/person-page'},
      {label: 'Potential  candidates', link: '/person-page'},
      {label: 'History', link: '/person-page'}];
    this.model = new GeneralPage('', [], [], [], [],'');
    this.arrayOfCities = [];
    this.sendArrayOfCities = [];
    this.temp = '';
    this.arrayOfStatuses = [];
    this.sendArrayOfStatuses = [];
    this.arrayOfSkills = [];
    this.sendArrayOfSkills = [];
    this.arrayOfLanguages = [];
    this.sendArrayOfLanguages = [];
  }

  ngOnInit() {
    this.httpService
      .getData(`http://localhost:1337/api/vacancies/${this.route.snapshot.url[2].path}`)
      .subscribe((data) => {
        this.temp = data.json();
      });

    this.httpService.getData('http://localhost:1337/api/meta-data/candidate-statuses')
      .subscribe((res) => {
        this.arrayOfStatuses = res.json();
        let index = 0;
        for (let i of this.arrayOfStatuses) {
          this.sendArrayOfStatuses[index] = i.status;
          index += 1;
        }
      });

    this.httpService.getData('http://localhost:1337/api/meta-data/skills').subscribe((res) => {
      this.arrayOfSkills = res.json();
      let index = 0;
      for (const i of this.arrayOfSkills) {
        this.sendArrayOfSkills[index] = i.skill_name;
        index += 1;
      }
    });
    this.httpService.getData('http://localhost:1337/api/meta-data/english-levels')
      .subscribe((res) => {
        this.arrayOfLanguages = res.json();
        let index = 0;
        for (let i of this.arrayOfLanguages) {
          this.sendArrayOfLanguages[index] = i.lvl;
          index += 1;
        }
      });
    this.httpService.getData('http://localhost:1337/api/meta-data/locations')
      .subscribe((res) => {
        console.log(res);
        this.arrayOfCities = res.json();
        let index = 0;
        for (let i of this.arrayOfCities) {
          this.sendArrayOfCities[index] = i.city;
          index += 1;
        }
        this.model = new GeneralPage(this.temp, this.sendArrayOfCities, this.sendArrayOfStatuses, this.sendArrayOfSkills, this.sendArrayOfLanguages,'vacancy');
      });
  }
}
