import { Component, OnInit } from '@angular/core';
import { CardList } from '../../classes/card-list';
import { CandidateCardItem } from '../../interfaces/candidate-card-item';
import { HttpService } from '../../http-service/http-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ng2FloatBtn } from 'ng2-float-btn';

@Component({
  selector: 'person-list',
  templateUrl: `./person-list.component.html`,
  styleUrls: ['person-list.component.scss'],
  providers: [HttpService],
})

export class PersonListComponent implements OnInit {
  flagOfButtonShowMore: boolean = true;
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

  arrayOfCitiesFromServer: any[] = [];
  arrayOfSkillsFromServer: any[] = [];


  date: Date;
  urlSearch: string;
  urlDefault: string = 'http://192.168.43.135:1337/api/candidates/search';
  countOfElements: number;
  arrayOfQuery: string [];
  returnQuery: string;
  mainButton: Ng2FloatBtn;
  buttons: Array<Ng2FloatBtn>;
  step: number = 5;

  constructor(private httpService: HttpService, private route: ActivatedRoute, private router: Router) {
    this.arrayOfSkills = [];
    this.arrayOfStatuses = [];
    this.arrayOfLanguages = [];
    this.arrayOfCities = [];
    this.arrayOfSalary = [];
    this.waitArrayOfSalary = [-1, -1];
    this.date = new Date();
    this.countOfElements = 5;

    this.mainButton = {
      color: "accent",
      iconName: "more_vert"
    };
    this.buttons = [
      {
        color: "accent",
        iconName: "add",
        onClick: () => {
          this.router.navigate(['/add-candidate']);
        },
        label: "Add"
      },
      {
        color: "accent",
        iconName: "file_download",
        onClick: () => {
          window.open(`http://192.168.43.135:1337/api/candidates/report?${this.makeQuery(this.arrayOfCities, 'city', true)}${this.makeQuery(this.arrayOfStatuses, 'status', false)}${this.makeQuery(this.arrayOfSkills, 'primarySkill', false)}${this.makeQuery(this.arrayOfLanguages, 'englishLvl', false)}${this.makeQuery(this.arrayOfSalary, 'salaryWish', false)}&expYear=${this.date.getTime()}`);
          window.close();
        },
        label: "File"
      }
    ]
  }

  ngOnInit() {
    this.httpService.postData({skip: 0, amount: this.countOfElements}, 'http://192.168.43.135:1337/api/candidates')
      .subscribe((res) => {
        this.persons = res.json();
        this.listItem = new CardList(this.persons, 'candidates');
        this.urlAdress = this.route.snapshot.url[0].path;
      });
    this.httpService.getData('http://192.168.43.135:1337/api/meta-data/locations').subscribe((res) => {
      this.arrayOfCitiesFromServer = res.json();
    });
    this.httpService.getData('http://192.168.43.135:1337/api/meta-data/skills').subscribe((res) => {
      this.arrayOfSkillsFromServer = res.json();
    });

  }

  sendSearchLine(event) {
    if (event.indexOf(' ') > -1) {
      event = event.replace(/\s/ig, '%20');
    }
    if (!event) {
      this.urlSearch = this.urlDefault;
    } else {
      this.urlSearch = `http://192.168.43.135:1337/api/candidates/search?q=${event}`;
    }
    this.httpService.postData({skip: 0}, this.urlSearch)
      .subscribe((res) => {
        this.persons = res.json();
        this.listItem = new CardList(this.persons, 'candidates');
        this.urlAdress = this.route.snapshot.url[0].path;
      });
  }

  send(event) {
    this.countOfElements = 0;
    this.checkGroupOfEvent(event);
    this.body = {
      skip: 0,
      city: this.arrayOfCities,
      status: this.arrayOfStatuses,
      primarySkill: this.arrayOfSkills,
      englishLvl: this.arrayOfLanguages,
      salaryWish: this.arrayOfSalary,
      expYear: this.date,
      amount: this.countOfElements + this.step + 1,
    };
    this.httpService.postData(this.body, 'http://192.168.43.135:1337/api/candidates')
      .subscribe((res) => {
        this.persons = res.json();
        if (this.isLastItem())
          this.persons.pop();
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
      case 'citySmall':
        this.arrayOfCities.push(this.searchOfCountArray(this.arrayOfCitiesFromServer,event.id));
        this.arrayOfSkills = [];
        break;
      case 'skillSmall':
        console.log('good');
        this.arrayOfSkills.push(this.searchOfCountArray(this.arrayOfSkillsFromServer,event.id));
        this.arrayOfCities = [];
        break;
    }
  }

  onClick() {
    this.body = {
      skip: 0,
      city: this.arrayOfCities,
      status: this.arrayOfStatuses,
      primarySkill: this.arrayOfSkills,
      englishLvl: this.arrayOfLanguages,
      salaryWish: this.arrayOfSalary,
      expYear: this.date,
      amount: this.countOfElements + this.step + 1,
    };
    this.httpService.postData(this.body, 'http://192.168.43.135:1337/api/candidates')
      .subscribe((res) => {
        this.persons = res.json();
        console.log(this.persons);
        if (this.isLastItem())
          this.persons.pop();
        this.listItem = new CardList(this.persons, 'candidates');
        this.urlAdress = this.route.snapshot.url[0].path;
      });
  }

  isLastItem() {
    if (this.countOfElements + this.step < this.persons.length) {
      this.flagOfButtonShowMore = true;
      this.countOfElements += this.step;
      return true;
    }
    else {
      this.countOfElements -= this.step;
      this.flagOfButtonShowMore = false;
      return false;
    }
  }

  makeQuery(array: any[], type: string, flag: boolean) {
    this.arrayOfQuery = array.map(function (elem) {
      return `&${type}[]=${elem}`
    });
    this.returnQuery = this.arrayOfQuery.join('');
    if (flag)
      return this.returnQuery.substr(1, this.returnQuery.length);
    else {
      return this.returnQuery;
    }
  }

  searchOfCountArray(array: any[], searchWord: string) {
    let index = 0;
    for (let i of array) {
      if (JSON.stringify(i).indexOf(searchWord) > -1)
        return index + 1;
      else
        index += 1;
    }
  }
}
