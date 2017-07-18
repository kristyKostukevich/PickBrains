import { Component, OnInit } from '@angular/core';
import { HttpService } from './filter-vacancy.service';

@Component({
  selector: 'filter-vacancy',
  templateUrl: 'filter-vacancy.component.html',
  styleUrls: ['filter-vacancy.component.scss'],
  providers: [HttpService],
})
export class FilterVacancyComponent implements OnInit {
  arrayOfCities: string[] = [];
  arrayOfSkills: string[] = [];

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.getCitiesData().then(res => {
      this.arrayOfCities = res.json();
      console.log(this.arrayOfCities)
    });
    this.httpService.getSkillsData().then(res => {
      this.arrayOfSkills = res.json();
    });

  }
}
