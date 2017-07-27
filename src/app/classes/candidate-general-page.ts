import { InputModel } from 'app/interfaces/input-model';
import { SelectModel } from 'app/interfaces/select-model';
import { DatePickerModel } from 'app/interfaces/date-picker-model';
import { SelectMarkModel } from 'app/interfaces/select-mark-model';

export class CandidateGeneralPage {
  firstName: InputModel;
  lastName: InputModel;
  location: SelectModel;
  status: SelectModel;
  primarySkill: SelectModel;
  workExperience: DatePickerModel;
  secondarySkills: SelectMarkModel[];
  otherSkills: SelectModel[];
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

  constructor(data: any) {
    this.firstName = new InputModel(data.first_name, 'First Name');
    this.lastName = new InputModel(data.second_name, 'Last Name');
    this.location = new SelectModel(data.city, 'Location', ['1', '2', '3']);
    this.status = new SelectModel(data.status, 'Status', ['1', '2', '3']);
    this.primarySkill = new SelectModel(data.skill_name, 'Primarry Skill',
      ['1', '2', '3'], data.primary_skill_lvl);
    this.workExperience = new DatePickerModel(data.exp_year, 'Work Experience');

    this.secondarySkills = new Array(data.sec_skills.length);
    for (const i in data.sec_skills) {
      const item = data.sec_skills[i];
      this.secondarySkills[i] = new SelectMarkModel(item.skill_name, 'Secondary skill',
        ['Ruby on Rails', 'BI', '3'], item.lvl, item.id);
    }

    this.otherSkills = [];
    for (const i in data.other_skills) {
      const item = data.other_skills[i];
      this.otherSkills[i] = new SelectModel(item.skill, 'Other skill',
        ['1', '2', '3'], item.id);
    }

    this.englishLevel = new SelectModel(data.lvl, 'English Level', ['1', '2', '3']);
    this.resumeLink = new InputModel(data.linkedin, 'Resume Link');

    // нужны vacancies,hrmNames, techName

    this.emailAdresses = [];
    for (const i in data.emails) {
      const item = data.emails[i];
      this.emailAdresses[i] = new InputModel(item, 'Email adress');
    }

    this.phoneNumbers = new InputModel(data.phone, 'Phone number');
    this.linkedIn = new InputModel(data.linked_in, 'LinledIn');
    this.skypeId = new InputModel(data.skype, 'SkypeID');
  }
}
