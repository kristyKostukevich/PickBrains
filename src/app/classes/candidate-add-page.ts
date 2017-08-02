import { InputModel } from 'app/interfaces/input-model';
import { SelectModel } from 'app/interfaces/select-model';
import { DatePickerModel } from 'app/interfaces/date-picker-model';

export class CandidateAddPage {
  id: number;
  type: string;
  firstName: InputModel;
  lastName: InputModel;
  location: SelectModel;
  status: SelectModel;
  primarySkill: SelectModel;
  workExperience: DatePickerModel;
  secondarySkills: SelectModel[];
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
  emailAdresses: InputModel;
  phoneNumbers: InputModel; //почему не массив?
  linkedIn: InputModel;
  skypeId: InputModel;
  nextSecondarySkill: SelectModel;
  nextOtherSkill: SelectModel;

  constructor(data: any, arrayOfCities: any[], arrayOfStatuses: any[], arrayOfSkills: any[], arrayOfLanguages: any[],arrayOfOtherSkills: any[], type: string) {
    this.id = data.id;
    this.type = type;
    this.firstName = new InputModel(data.firstName, 'First Name');
    this.lastName = new InputModel(data.secondName, 'Last Name');
    this.location = new SelectModel(data.city, 'Location', arrayOfCities);
    this.status = new SelectModel(data.status, 'Status', arrayOfStatuses);
    this.primarySkill = new SelectModel(data.skillName, 'Primary Skill', arrayOfSkills, 1);
    this.workExperience = new DatePickerModel(data.expYear, 'Work Experience');
    this.secondarySkills=[];
    this.nextSecondarySkill = new SelectModel('','Secondary skill',arrayOfSkills,1);
    this.otherSkills = [];
    this.nextOtherSkill = new SelectModel('','Other skill',arrayOfOtherSkills);
    this.englishLevel = new SelectModel(data.lvl, 'English Level', arrayOfLanguages);
    this.emailAdresses = new InputModel('', 'Email addresses');
    this.phoneNumbers = new InputModel(data.phone, 'Phone number');
    this.linkedIn = new InputModel(data.linkedin, 'LinledIn');
    this.skypeId = new InputModel(data.skype, 'SkypeID');
  }
}
