import { InputModel } from 'app/interfaces/input-model';
import { SelectModel } from 'app/interfaces/select-model';
import { DatePickerModel } from 'app/interfaces/date-picker-model';

export class CandidateGeneralPage {
  id: number;
  type: string;
  firstName: InputModel;
  lastName: InputModel;
  location: SelectModel;
  status: SelectModel;
  primarySkill: SelectModel;
  workExperience: DatePickerModel;
  secondarySkills: InputModel[];
  otherSkills: InputModel [];
  englishLevel: SelectModel;
  vacancies: SelectModel[];
  emailAddresses: InputModel[];
  phoneNumbers: InputModel;
  linkedIn: InputModel;
  skypeId: InputModel;

  constructor(data: any, arrayOfCities: any[], arrayOfStatuses: any[], arrayOfSkills: any[], arrayOfLanguages: any[], arrayOfOtherSkills: any[], type: string) {
    this.id = data.id;
    this.type = type;
    this.firstName = new InputModel(data.firstName, 'First Name',undefined,'firstName');
    this.lastName = new InputModel(data.secondName, 'Last Name',undefined,'secondName');
    this.location = new SelectModel(data.city, 'Location', arrayOfCities,undefined,undefined,'city');
    this.status = new SelectModel(data.status, 'Status', arrayOfStatuses,undefined,undefined,'status');
    this.primarySkill = new SelectModel(data.skillName, 'Primary Skill', arrayOfSkills.slice(0,20), data.primarySkillLvl,undefined,'skillName');
    this.workExperience = new DatePickerModel(data.expYear, 'Work Experience',undefined,'expYear');
    this.secondarySkills = [];
    for (var key in data.secSkills) {
      this.secondarySkills[key] = new SelectModel(
        data.secSkills[key].skillName,
        'Secondary skill',
        arrayOfSkills,
        data.secSkills[key].lvl,
        undefined,
        'secSkills',
        +key,
      );
    }
    this.otherSkills = [];
    for (var key in data.otherSkills) {
      this.otherSkills[key] = new SelectModel(
        data.otherSkills[key].skill,
        'Other skill',
        arrayOfOtherSkills,
        undefined,
        undefined,
        'otherSkills',
        +key,
      );
    }
    this.englishLevel = new SelectModel(data.lvl, 'English Level', arrayOfLanguages,undefined,undefined,'lvl');
    this.emailAddresses = [];
    for (var key in data.emails) {
      this.emailAddresses[key] = new InputModel(data.emails[key], 'Email address',undefined,'emails',+key);
    }
    this.phoneNumbers = new InputModel(data.phone, 'Phone number',undefined,'phone');
    this.linkedIn = new InputModel(data.linkedin, 'LinkedIn',undefined,'linkedin');
    this.skypeId = new InputModel(data.skype, 'SkypeID',undefined,'skype');
  }
}
