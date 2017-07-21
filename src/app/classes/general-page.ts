import { InputModel } from '../interfaces/input-model';
import { SelectModel } from '../interfaces/select-model';
import { DatePickerModel } from '../interfaces/date-picker-model';

export class GeneralPage {
  type: string;
  projectName: InputModel;
  location: SelectModel;
  requestDate: DatePickerModel;
  projectStartDate: DatePickerModel;
  status: SelectModel;
  // resumeLink: InputModel;
  primarySkill: SelectModel;
  workExperience: DatePickerModel;
  englishLevel: SelectModel;
  otherSkills: InputModel [];
  description: InputModel;

  constructor(data: any, arrayOfCities: any[], arrayOfStatuses: any[], arrayOfSkills: any[], arrayOfLanguages: any[], type: string) {
    this.type = type;
    this.projectName = new InputModel(data.name, 'Project name');
    this.location = new SelectModel(data.city, 'Location', arrayOfCities);
    this.requestDate = new DatePickerModel(data.request_date, 'Request date');
    this.projectStartDate = new DatePickerModel(data.start_date, 'Project start date');
    this.status = new SelectModel(data.status, 'Status', arrayOfStatuses);
    this.primarySkill = new SelectModel(data.skill_name, 'Primary skill', arrayOfSkills);
    this.workExperience = new DatePickerModel(data.work_exp, 'Work experience');
    this.englishLevel = new SelectModel(data.lvl, 'English level', arrayOfLanguages);
    this.otherSkills = [];
    for (var key in data.secondary_skills) {
      this.otherSkills[key] = new InputModel(data.secondary_skills[key].skill_name, 'Secondary skill');
    }
    this.description = new InputModel(data.description, 'Description');
  }

}
