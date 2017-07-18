import { Component, OnInit } from '@angular/core';
import { HttpService } from './filter-person.service';

@Component({
  selector: 'filter-person',
  templateUrl: 'filter-person.component.html',
  styleUrls: ['filter-person.component.scss'],
  providers: [HttpService],
})
export class FilterPersonComponent implements OnInit {

  arrayOfCities: string[] = [];
  arrayOfSkills: string[] = [];
  arrayOfLanguages: string[] = [];
  arrayOfStatuses: string[] = [];

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.getCitiesData().then(res => {
      this.arrayOfCities = res.json();
    });
    this.httpService.getSkillsData().then(res => {
      this.arrayOfSkills = res.json();
    });
    this.httpService.getLanguageData().then(res => {
      this.arrayOfLanguages = res.json();
    });
    this.httpService.getStatusData().then(res => {
      this.arrayOfStatuses = res.json();
    });
  }
}

