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

  constructor(data: any, arrayOfCities: any[], arrayOfStatuses: any[], arrayOfSkills: any[], arrayOfLanguages: any[], type: string) {
    this.id = data.id;
    this.type = type;
    this.firstName = new InputModel(data.first_name, 'First Name');
    this.lastName = new InputModel(data.second_name, 'Last Name');
    this.location = new SelectModel(data.city, 'Location', arrayOfCities);
    this.status = new SelectModel(data.status, 'Status', arrayOfStatuses);
    this.primarySkill = new SelectModel(data.skill_name, 'Primary Skill',
    arrayOfSkills, data.primary_skill_lvl);
    this.workExperience = new DatePickerModel(data.exp_year, 'Work Experience');
    this.secondarySkills = [];
    for (var key in data.sec_skills) {
      this.secondarySkills[key] = new InputModel(data.sec_skills[key].skill_name, 'Secondary skill');
      // console.log( data.sec_skills[key].skill_name);
    }
    this.otherSkills = [];
    for (var key in data.other_skills) {
      this.otherSkills[key] = new InputModel(data.other_skills[key].skill, 'Other skill');
    }
    this.englishLevel = new SelectModel(data.lvl, 'English Level', arrayOfLanguages);
    // this.resumeLink = new InputModel(data.linkedin, 'Resume Link');
    //
    // // нужны vacancies,hrmNames, techName
    //

    this.emailAdresses = [];
    for (var key in data.emails) {
      this.emailAdresses[key] = new InputModel(data.emails[key], 'Email adress');
    }
    this.phoneNumbers = new InputModel(data.phone, 'Phone number');
    this.linkedIn = new InputModel(data.linked_in, 'LinledIn');
    this.skypeId = new InputModel(data.skype, 'SkypeID');
  }
}
