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
  resumeLink: InputModel;
  // salaryWishes:
  vacancies: SelectModel[];
  hrmNames: SelectModel[];
  techName: SelectModel[];
  interviewResult: InputModel;
  interviewDate: DatePickerModel;
  communicationDate: DatePickerModel;
  communicateAgain: DatePickerModel;
  emailAdresses: InputModel[];
  phoneNumbers: InputModel; //почему не массив?
  linkedIn: InputModel;
  skypeId: InputModel;

  constructor(data: any, arrayOfCities: any[], arrayOfStatuses: any[], arrayOfSkills: any[], arrayOfLanguages: any[], arrayOfOtherSkills: any[], type: string) {

    this.id = data.id;
    this.type = type;
    this.firstName = new InputModel(data.firstName, 'First Name');
    this.lastName = new InputModel(data.secondName, 'Last Name');
    this.location = new SelectModel(data.city, 'Location', arrayOfCities);
    this.status = new SelectModel(data.status, 'Status', arrayOfStatuses);
    // console.log(data.skillName);
    // console.log(data.secSkills[0]);
    this.primarySkill = new SelectModel(data.skillName, 'Primary Skill', arrayOfSkills, data.primarySkillLvl);
    this.workExperience = new DatePickerModel(data.expYear, 'Work Experience');
    this.secondarySkills = [];
    for (var key in data.secSkills) {
      this.secondarySkills[key] = new SelectModel(data.secSkills[key].skillName, 'Secondary skill',arrayOfSkills,data.secSkills[key].lvl);
    }
    this.otherSkills = [];
    for (var key in data.otherSkills) {
      this.otherSkills[key] = new SelectModel(data.otherSkills[key].skill, 'Other skill',arrayOfOtherSkills);
    }
    this.englishLevel = new SelectModel(data.lvl, 'English Level', arrayOfLanguages);
    // this.resumeLink = new InputModel(data.linkedin, 'Resume Link');
    //
    // // нужны vacancies,hrmNames, techName
    //

    this.emailAdresses = [];
    for (var key in data.emails) {
      this.emailAdresses[key] = new InputModel(data.emails[key], 'Email address');
    }
    this.phoneNumbers = new InputModel(data.phone, 'Phone number');
    this.linkedIn = new InputModel(data.linkedin, 'LinkedIn');
    this.skypeId = new InputModel(data.skype, 'SkypeID');
  }
}
