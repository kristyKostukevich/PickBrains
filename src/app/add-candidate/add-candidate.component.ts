import { Component, OnInit } from '@angular/core';
import { CandidateAddPage } from '../classes/candidate-add-page';
import { HttpService } from '../http-service/http-service';
import { Router } from '@angular/router';

@Component({
  selector: 'add-candidate',
  templateUrl: 'add-candidate.component.html',
  styleUrls: ['add-candidate.component.scss'],
  providers: [HttpService],
})

export class AddCandidateComponent implements OnInit {
  generalModel: CandidateAddPage;
  postCandidateInfo: PostCandidateInfo;
  temp: string;
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


  constructor(private httpService: HttpService,
              private router: Router) {
    this.generalModel = new CandidateAddPage('', [], [], [], [], [], '');
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
    this.httpService.getData('http://192.168.43.31:1337/api/meta-data/candidate-statuses').subscribe(res => {
      this.arrayOfStatuses = res.json();
      let index = 0;
      for (let i of this.arrayOfStatuses) {
        this.sendArrayOfStatuses[index] = i.status;
        index += 1;
      }
    });

    this.httpService.getData('http://192.168.43.31:1337/api/meta-data/skills').subscribe(res => {
      this.arrayOfSkills = res.json();
      let index = 0;
      for (let i of this.arrayOfSkills) {
        this.sendArrayOfSkills[index] = i.skillName;
        index += 1;
      }
    });
    this.httpService.getData('http://192.168.43.31:1337/api/meta-data/english-levels').subscribe(res => {
      this.arrayOfLanguages = res.json();
      let index = 0;
      for (let i of this.arrayOfLanguages) {
        this.sendArrayOfLanguages[index] = i.lvl;
        index += 1;
      }
    });
    this.httpService.getData('http://192.168.43.31:1337/api/meta-data/other-skills').subscribe(res => {
      this.arrayOfOtherSkills = res.json();
      let index = 0;
      for (let i of this.arrayOfOtherSkills) {
        this.sendArrayOfOtherSkills[index] = i.skill;
        index += 1;
      }
    });
    this.httpService.getData('http://192.168.43.31:1337/api/meta-data/locations').subscribe(res => {
      this.arrayOfCities = res.json();
      let index = 0;
      for (let i of this.arrayOfCities) {
        this.sendArrayOfCities[index] = i.city;
        index += 1;
      }
      this.generalModel = new CandidateAddPage(this.temp, this.sendArrayOfCities, this.sendArrayOfStatuses, this.sendArrayOfSkills, this.sendArrayOfLanguages, this.sendArrayOfOtherSkills, 'add-candidate');
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
    this.postCandidateInfo = new PostCandidateInfo(
      this.sendArrayOfOtherSkills,
      this.searchOfCountArray(this.arrayOfCities, this.generalModel.location.value),
      this.generalModel.workExperience.value,
      this.generalModel.emailAdresses.value.split(' '),
      this.generalModel.firstName.value,
      this.generalModel.linkedIn.value,
      this.searchOfCountArray(this.arrayOfLanguages, this.generalModel.englishLevel.value),
      this.generalModel.otherSkills,
      this.generalModel.phoneNumbers.value,
      this.generalModel.primarySkill.level,
      this.generalModel.secondarySkills,
      this.generalModel.lastName.value,
      this.searchOfCountArray(this.arrayOfSkills, this.generalModel.primarySkill.value),
      this.generalModel.skypeId.value,
    );
    this.httpService.postData(this.postCandidateInfo, 'http://192.168.43.31:1337/api/candidates/new')
      .subscribe((res) => {
        if (res.status === 201) {
          this.router.navigate(['/person-page']);
        }
        this.done = true;
      });
  }
}

export class PostCandidateInfo {
  city: number;
  expYear: string; //Date;
  emails: string[];
  engFirstName: string;
  linkedin: string;
  englishLvl: number;
  otherSkills: any[];
  phone: string;
  primarySkillLvl: number;
  secSkills: SkillsFields[];
  engSecondName: string;
  primarySkill: number;
  skype: string;

  constructor(arrayOfOtherSkills,
              location,
              workExperience,
              mailAdresses,
              firstName,
              linkedIn,
              englishLevel,
              otherSkills,
              phoneNumbers,
              primarySkillLvl,
              secondarySkills,
              lastName,
              primarySkill,
              skypeId,) {
    this.city = location;
    this.emails = mailAdresses;
    this.expYear = workExperience;
    this.engFirstName = firstName;
    this.linkedin = linkedIn;
    this.englishLvl = englishLevel;
    this.otherSkills = [];
    var count = 0;
    for (var item of otherSkills) {
      this.otherSkills[count] = this.searchOfCountArray(arrayOfOtherSkills, otherSkills[count].value);
      count++;
    }
    this.phone = phoneNumbers;
    this.primarySkillLvl = primarySkillLvl;
    this.secSkills = [];
    var counter = 0;
    for (var item of secondarySkills) {
      this.secSkills[counter] = new SkillsFields(
        this.searchOfCountArray(secondarySkills[counter].options, secondarySkills[counter].value).toString(),
        secondarySkills[counter].level,
      );
      counter++;
    }
    this.engSecondName = lastName;
    this.primarySkill = primarySkill;
    this.skype = skypeId;
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
  skillName: string;
  lvl: number;

  constructor(name: string, level: number) {
    this.skillName = name;
    this.lvl = level;
  }
}
