import { Component, OnInit } from '@angular/core';
import { CardList } from '../../classes/card-list';
import { CandidateCardItem } from '../../interfaces/candidate-card-item';
import { HttpService } from '../../http-service/http-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'person-list',
  templateUrl: `./person-list.component.html`,
  styleUrls: ['person-list.component.scss'],
  providers: [HttpService],
})

export class PersonListComponent implements OnInit {
  persons: CandidateCardItem [] = [];
  urlAdress: string;
  listItem: CardList;
  body: any;
  arrayOfCities: any[];
  arrayOfSkills: any[];
  arrayOfStatuses: any[];
  arrayOfLanguages: any[];
  arrayOfSalary: any[];
  waitArrayOfSalary: any[];
  date: Date;
  urlSearch: string;
  urlDefault: string = 'http://localhost:1337/api/candidates/search';


  constructor(private httpService: HttpService, private route: ActivatedRoute) {
    this.arrayOfSkills = [];
    this.arrayOfStatuses = [];
    this.arrayOfLanguages = [];
    this.arrayOfCities = [];
    this.arrayOfSalary = [];
    this.waitArrayOfSalary = [-1, -1];
    this.date = new Date();
  }

  ngOnInit() {
    this.httpService.postData({skip: 0}, 'http://localhost:1337/api/candidates')
      .subscribe((res) => {
        this.persons = res.json();
        this.listItem = new CardList(this.persons, 'candidates');
        this.urlAdress = this.route.snapshot.url[0].path;
      });
  }

  sendSearchLine(event) {
    if(event.indexOf(' ') > -1){
      event = event.replace(/\s/ig, '%20');
    }
    if (!event) {
      this.urlSearch = this.urlDefault;
    } else {
      this.urlSearch = `http://localhost:1337/api/candidates/search?q=${event}`;
    }
    this.httpService.postData({skip: 0}, this.urlSearch)
      .subscribe((res) => {
        this.persons = res.json();
        this.listItem = new CardList(this.persons, 'candidates');
        this.urlAdress = this.route.snapshot.url[0].path;
      });
  }

  send(event) {
    // console.log(event);
    this.checkGroupOfEvent(event);
    console.log(this.arrayOfCities);
    console.log(this.arrayOfStatuses);
    console.log(this.arrayOfLanguages);
    console.log(this.arrayOfSkills);
    console.log(this.date);
    console.log(this.arrayOfSalary);
    this.body = {
      skip: 0,
      city: this.arrayOfCities,
      status: this.arrayOfStatuses,
      primarySkill: this.arrayOfSkills,
      englishLvl: this.arrayOfLanguages,
      salaryWish: this.arrayOfSalary,
      expYear: this.date,
    };
    this.httpService.postData(this.body, 'http://localhost:1337/api/candidates')
      .subscribe((res) => {
        // console.log(res.json());
        this.persons = res.json();
        this.listItem = new CardList(this.persons, 'candidates');
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
      case 'language':
        if (!this.isElemOfArray(this.arrayOfLanguages, event.id)) {
          this.arrayOfLanguages.push(event.id);
        }
        break;
      case 'status':
        if (!this.isElemOfArray(this.arrayOfStatuses, event.id)) {
          this.arrayOfStatuses.push(event.id);
        }
        break;
      case 'date':
        this.date = event.id;
        break;
      case 'salary':
        if (event.id.field === 'begin') {
          this.waitArrayOfSalary[0] = +event.id.event;
        }
        if (event.id.field === 'end') {
          this.waitArrayOfSalary[1] = +event.id.event;
        }
        console.log(this.waitArrayOfSalary);
        if (this.waitArrayOfSalary[0] != -1 && this.waitArrayOfSalary[1] != -1 && this.waitArrayOfSalary[1] != '') {
          for (let i = 0; i < 2; i++)
            this.arrayOfSalary[i] = this.waitArrayOfSalary[i];
        }
        console.log(this.arrayOfSalary);
        break;
    }
  }

}
