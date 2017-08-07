import { InputModel } from '../interfaces/input-model';
import { SelectModel } from '../interfaces/select-model';
import { DatePickerModel } from '../interfaces/date-picker-model';

export class VacancyGeneralPage {
  type: string;
  projectName: InputModel;
  location: SelectModel;
  requestDate: DatePickerModel;
  projectStartDate: DatePickerModel;
  status: SelectModel;
  linkedIn: InputModel;
  salaryWish: InputModel;
  primarySkill: SelectModel;
  workExperience: DatePickerModel;
  englishLevel: SelectModel;
  otherSkills: SelectModel [];
  secondarySkills: SelectModel[];
  description: InputModel;

  constructor(data: any, arrayOfCities: any[], arrayOfStatuses: any[], arrayOfSkills: any[], arrayOfLanguages: any[], arrayOfOtherSkills: any[], type?: string) {
    console.log(data);
    this.type = type;
    this.projectName = new InputModel(data.name, 'Project name');
    this.location = new SelectModel(data.city, 'Location', arrayOfCities);
    this.requestDate = new DatePickerModel(data.requestDate, 'Request date');
    this.projectStartDate = new DatePickerModel(data.startDate, 'Project start date');
    this.status = new SelectModel(data.status, 'Status', arrayOfStatuses);
    this.primarySkill = new SelectModel(data.skillName, 'Primary skill', arrayOfSkills, data.primarySkillLvl);
    this.workExperience = new DatePickerModel(data.expYear, 'Work experience');
    this.englishLevel = new SelectModel(data.vacancyEnglishLvl, 'English level', arrayOfLanguages);
    this.linkedIn = new InputModel(data.linkedin, 'LinkedIn');
    this.salaryWish = new InputModel(data.salaryWish, 'Salary wish');
    this.secondarySkills = [];
    for (var key in data.secondarySkills) {
      this.secondarySkills[key] = new SelectModel(data.secondarySkills[key].skillName, 'Secondary skill', arrayOfSkills, data.secondarySkills[key].lvl);
    }
    this.otherSkills = [];
    for (var key in data.otherSkills) {
      this.otherSkills[key] = new SelectModel(data.otherSkills[key].skill, 'Other skill', arrayOfOtherSkills);
    }
    this.description = new InputModel(data.description, 'Description');
  }
}
