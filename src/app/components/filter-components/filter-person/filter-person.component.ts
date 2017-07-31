import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../../../http-service/http-service';
import { GeneralPage } from '../../../classes/general-page';


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
    this.httpService.getData('http://localhost:1337/api/meta-data/locations').subscribe((res) => {
      this.arrayOfCities = res.json();
    });
    this.httpService.getData('http://localhost:1337/api/meta-data/skills').subscribe((res) => {
      this.arrayOfSkills = res.json();
    });
    this.httpService.getData('http://localhost:1337/api/meta-data/english-levels').subscribe((res) => {
      this.arrayOfLanguages = res.json();
    });
    this.httpService.getData('http://localhost:1337/api/meta-data/candidate-statuses').subscribe((res) => {
      this.arrayOfStatuses = res.json();
    });
  }
}

