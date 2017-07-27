import { InputModel } from '../interfaces/input-model';
import { SelectModel } from '../interfaces/select-model';
import { DatePickerModel } from '../interfaces/date-picker-model';
import { SelectMarkModel } from 'app/interfaces/select-mark-model';

export class VacancyGeneralPage {

  id: number;
  projectName: InputModel;
  location: SelectModel;
  requestDate: DatePickerModel;
  projectStartDate: DatePickerModel;
  status: SelectModel;
  primarySkill: SelectModel;
  secondarySkills: SelectMarkModel[];
  otherSkills: InputModel[];

  constructor(data: any) {
    this.id = data.id;
    this.projectName = new InputModel(data.name, 'Project Name');
    this.location = new SelectModel(data.city, 'Location',
      ['Belarus, Vitebsk', 'Minsk', 'NewYork']);
    this.requestDate = new DatePickerModel(data.requestDate, 'Request Date');
    this.projectStartDate = new DatePickerModel(data.startDate, 'Project Start Date');
    this.status = new SelectModel(data.status, 'Status', ['On hold', '2', '3']);
    this.primarySkill = new SelectModel(data.skillName, 'Primary Skill',
      ['Android', 'C++', 'JavaEE'], data.primarySkillLvl);

    this.secondarySkills = new Array(data.secondarySkills.length);
    for (const i in data.secondarySkills) {
      const item = data.secondarySkills[i];
      this.secondarySkills[i] = new SelectMarkModel(item.skillName, 'Secondary Skill',
        ['Ruby on Rails', 'BI', '3'], item.lvl);
    }

    this.otherSkills = new Array(data.otherSkills.length);
    for (const i in data.otherSkills) {
      const item = data.otherSkills[i];
      this.otherSkills[i] = new SelectMarkModel(item.skill, 'Other Skill',
        ['Programming basics', 'Networking', '3'], undefined, item.id);
    }
  }
}
