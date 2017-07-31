import { InputModel } from 'app/interfaces/input-model';
import { SelectModel } from 'app/interfaces/select-model';
import { DatePickerModel } from 'app/interfaces/date-picker-model';

export class VacancyAddPage {
  id: number;
  type: string;
  projectName: InputModel;
  location: SelectModel;
  status: SelectModel;
  primarySkill: SelectModel;
  secondarySkills: SelectModel[];
  otherSkills: SelectModel [];
  englishLevel: SelectModel;
  salaryWish: InputModel;
  linkedIn: InputModel;
  startDate: DatePickerModel;
  workExperience: DatePickerModel;
  nextSecondarySkill: SelectModel;
  nextOtherSkill: SelectModel;
  description: InputModel;

  constructor(data: any, arrayOfCities: any[], arrayOfStatuses: any[], arrayOfSkills: any[], arrayOfLanguages: any[],arrayOfOtherSkills: any[], type: string) {
    this.id = data.id;
    this.type = type;
    this.projectName = new InputModel('', 'Project name');
    this.location = new SelectModel('', 'Location', arrayOfCities);
    this.status = new SelectModel('', 'Status', arrayOfStatuses);
    this.primarySkill = new SelectModel('', 'Primary Skill', arrayOfSkills, 1);
    this.secondarySkills=[];
    this.nextSecondarySkill = new SelectModel('','Secondary skill',arrayOfSkills,1);
    this.otherSkills = [];
    this.nextOtherSkill = new SelectModel('','Other skill',arrayOfOtherSkills);
    this.englishLevel = new SelectModel('', 'English Level', arrayOfLanguages);
    this.salaryWish = new InputModel('','Salary wish');
    this.linkedIn = new InputModel('','LinkedIn');
    this.startDate = new DatePickerModel(data.startDate, 'Start date');
    this.workExperience = new DatePickerModel(data.expYear, 'Work Experience');
    this.description = new InputModel('','Description of vacancy')
  }
}
