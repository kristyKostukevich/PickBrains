import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http-service/http-service';
import { VacancyAddPage } from '../classes/vacancy-add-page';

@Component({
  selector: 'add-vacancy',
  templateUrl: 'add-vacancy.component.html',
  styleUrls: ['add-vacancy.component.scss'],
  providers: [HttpService],
})
export class AddVacancyComponent implements OnInit {
  temp: string;
  model: VacancyAddPage;
  postVacancyInfo: PostVacancyInfo;
  arrayOfCities: any[];
  sendArrayOfCities: string[];
  arrayOfStatuses: any[];
  sendArrayOfStatuses: string[];
  arrayOfSkills: any[];
  sendArrayOfSkills: string[];
  arrayOfLanguages: any[];
  sendArrayOfLanguages: string[];
  arrayOfOtherSkills: any[];
  sendArrayOfOtherSkills: string [];

  constructor(private httpService: HttpService) {
    this.model = new VacancyAddPage('', [], [], [], [], [], '');
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

    this.httpService.getData('http://localhost:1337/api/meta-data/vacancy-statuses').subscribe(res => {
      this.arrayOfStatuses = res.json();
      let index = 0;
      for (let i of this.arrayOfStatuses) {
        this.sendArrayOfStatuses[index] = i.status;
        index += 1;
      }
    });

    this.httpService.getData('http://localhost:1337/api/meta-data/skills').subscribe(res => {
      this.arrayOfSkills = res.json();
      let index = 0;
      for (let i of this.arrayOfSkills) {
        this.sendArrayOfSkills[index] = i.skillName;
        index += 1;
      }
    });
    this.httpService.getData('http://localhost:1337/api/meta-data/english-levels').subscribe(res => {
      this.arrayOfLanguages = res.json();
      let index = 0;
      for (let i of this.arrayOfLanguages) {
        this.sendArrayOfLanguages[index] = i.lvl;
        index += 1;
      }
    });
    this.httpService.getData('http://localhost:1337/api/meta-data/other-skills').subscribe(res => {
      this.arrayOfOtherSkills = res.json();
      let index = 0;
      for (let i of this.arrayOfOtherSkills) {
        this.sendArrayOfOtherSkills[index] = i.skill;
        index += 1;
      }
    });
    this.httpService.getData('http://localhost:1337/api/meta-data/locations').subscribe(res => {
      this.arrayOfCities = res.json();
      let index = 0;
      for (let i of this.arrayOfCities) {
        this.sendArrayOfCities[index] = i.city;
        index += 1;
      }
      this.model = new VacancyAddPage(this.temp, this.sendArrayOfCities, this.sendArrayOfStatuses, this.sendArrayOfSkills, this.sendArrayOfLanguages, this.sendArrayOfOtherSkills, 'add-vacancy');
    });
  }

  done: boolean = false;

  searchOfCountArray(array: any[], searchWord: string) {
    let index = 0;
    for (let i of array) {
      if (JSON.stringify(i).indexOf(searchWord) > -1)
        return index + 1;
      else
        index += 1;
    }
  }

  submit() {
    this.postVacancyInfo = new PostVacancyInfo(
      this.sendArrayOfOtherSkills,
      this.model.projectName.value,
      this.searchOfCountArray(this.arrayOfSkills, this.model.primarySkill.value),
      this.model.primarySkill.level,
      this.searchOfCountArray(this.arrayOfCities, this.model.location.value),
      this.searchOfCountArray(this.arrayOfStatuses, this.model.status.value),
      this.model.secondarySkills,
      this.model.otherSkills,
      this.searchOfCountArray(this.arrayOfLanguages, this.model.englishLevel.value),
      this.model.linkedIn.value,
      +this.model.salaryWish.value,
      this.model.startDate.value,
      this.model.workExperience.value,
      this.model.description.value,
    );
    console.log(this.postVacancyInfo);
    this.httpService.postData(this.postVacancyInfo, 'http://localhost:1337/api/vacancies/new')
      .subscribe(() => {
        this.done = true;
      });
  }

}

export class PostVacancyInfo {
  name: string;
  primarySkill: number;
  primarySkillLvl: number;
  city: number;
  status: number;
  secondarySkills: SkillsFields[];
  otherSkills: any[];
  englishLvl: number;
  linkedIn: string;
  salaryWish: number;
  startDate: Date;
  expYear: Date;
  description: string;

  constructor(arrayOfOtherSkills,
              name,
              primarySkill,
              primarySkillLvl,
              location,
              status,
              secondarySkills,
              otherSkills,
              englishLevel,
              linkedIn,
              salaryWish,
              startDate,
              workExperience,
              description) {
    this.name = name;
    this.primarySkill = primarySkill;
    this.primarySkillLvl = primarySkillLvl;
    this.city = location;
    this.status = status;
    this.secondarySkills = [];
    var counter = 0;
    for (var item of secondarySkills) {
      this.secondarySkills[counter] = new SkillsFields(
        this.searchOfCountArray(secondarySkills[counter].options, secondarySkills[counter].value),
        secondarySkills[counter].level);
      counter++;
    }
    this.otherSkills = [];
    var count = 0;
    for (var item of otherSkills) {
      this.otherSkills[count] = this.searchOfCountArray(arrayOfOtherSkills, otherSkills[count].value);
      count++;
    }
    this.englishLvl = englishLevel;
    this.linkedIn = linkedIn;
    this.salaryWish = salaryWish;
    this.startDate = startDate;
    this.expYear = workExperience;
    this.description = description;
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

export class SkillsFields {
  id: number;
  lvl: number;

  constructor(name: number, level: number) {
    this.id = name;
    this.lvl = level;
  }
}
