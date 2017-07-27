import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../http-service/http-service';


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
    this.httpService.getData('http://localhost:1337/api/meta-data/locations').subscribe((res) => {
      this.arrayOfCities = res.json();
    });
    this.httpService.getData('http://localhost:1337/api/meta-data/skills').subscribe((res) => {
      this.arrayOfSkills = res.json();
    });

  }
}
