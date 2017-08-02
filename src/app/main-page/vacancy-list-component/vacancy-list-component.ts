import { Component, OnInit } from '@angular/core';
import { CardList } from '../../classes/card-list';
import { VacancyCardItem } from '../../interfaces/vacancy-card-item';
import { HttpService } from '../../http-service/http-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'vacancy-list',
  templateUrl: 'vacancy-list-component.html',
  styleUrls: ['../person-list-component/person-list.component.scss'],
  providers: [HttpService],
})

export class VacancyListComponent implements OnInit {
  vacancies: VacancyCardItem [] = [];
  urlAdress: string;
  listItem: CardList;
  body: any;
  arrayOfCities: any[];
  arrayOfSkills: any[];

  constructor(private httpService: HttpService, private route: ActivatedRoute) {
    this.arrayOfSkills = [];
    this.arrayOfCities = [];
  }


  ngOnInit() {
    this.httpService.postData({limit: 0}, 'http://localhost:1337/api/vacancies').subscribe((res) => {
      this.vacancies = res.json();
      this.listItem = new CardList(this.vacancies, 'vacancies');
      this.urlAdress = this.route.snapshot.url[0].path;
    });
  }

  send(event) {
    this.checkGroupOfEvent(event);
    console.log(this.arrayOfCities);
    console.log(this.arrayOfSkills);
    this.body = {
      limit: 0,
      city: this.arrayOfCities,
      primarySkill: this.arrayOfSkills,
    };
    this.httpService.postData(this.body, 'http://localhost:1337/api/vacancies')
      .subscribe((res) => {
        // console.log(res.json());
        this.vacancies = res.json();
        this.listItem = new CardList(this.vacancies, 'vacancies');
        this.urlAdress = this.route.snapshot.url[0].path;
      });
  }

  isElemOfArray(array: any[], number: number): boolean {
    let temp = array.indexOf(number);
    if (temp > -1) {
      array.splice(temp, 1);
      return true;
    }
    else
      return false;
  }

  checkGroupOfEvent(event) {
    // console.log(typeof event.group);
    switch (event.group) {
      case 'city':
        if (!this.isElemOfArray(this.arrayOfCities, event.id)) {
          this.arrayOfCities.push(event.id);
        }
        break;
      case 'skill':
        if (!this.isElemOfArray(this.arrayOfSkills, event.id)) {
          this.arrayOfSkills.push(event.id);
        }
        break;
    }
  }
}
