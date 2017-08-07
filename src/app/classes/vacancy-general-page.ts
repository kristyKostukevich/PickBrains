import { InputModel } from '../interfaces/input-model';
import { SelectModel } from '../interfaces/select-model';
import { DatePickerModel } from '../interfaces/date-picker-model';

export class VacancyGeneralPage {
  id: string
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
    this.id = data.id;
    this.type = type;
    this.projectName = new InputModel(data.name, 'Project name',undefined,'projectName');
    this.location = new SelectModel(data.city, 'Location', arrayOfCities,undefined,undefined,'city');
    this.requestDate = new DatePickerModel(data.requestDate, 'Request date',undefined,'reqDate');
    this.projectStartDate = new DatePickerModel(data.startDate, 'Project start date',undefined,'projectStartDate');
    this.status = new SelectModel(data.status, 'Status', arrayOfStatuses,undefined,undefined,'status');
    this.primarySkill = new SelectModel(data.skillName, 'Primary skill', arrayOfSkills.slice(0,20),data.primarySkillLvl,undefined,'skillName');
    this.workExperience = new DatePickerModel(data.expYear, 'Work experience',undefined,'workExperience');
    this.englishLevel = new SelectModel(data.vacancyEnglishLvl, 'English level', arrayOfLanguages,undefined,undefined,'lvl');
    this.linkedIn = new InputModel(data.linkedin,'LinkedIn',undefined,'linkedin');
    this.salaryWish = new InputModel(data.salaryWish,'Salary wish',undefined,'salaryWish');
    this.secondarySkills = [];
    for (var key in data.secondarySkills) {
      this.secondarySkills[key] = new SelectModel(
        data.secondarySkills[key].skillName,
        'Secondary skill',
        arrayOfSkills,
        data.secondarySkills[key].lvl,
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
    this.description = new InputModel(data.description, 'Description',undefined,'description');
  }
}
