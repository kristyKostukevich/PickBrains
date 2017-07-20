import { InputModel } from '../interfaces/input-model';
import { SelectModel } from '../interfaces/select-model';
import { DatePickerModel } from '../interfaces/date-picker-model';

export class GeneralPage {
  projectName: InputModel;
  location: SelectModel;
  requestDate: DatePickerModel;
  projectStartDate: DatePickerModel;
  status: SelectModel;
  resumeLink: InputModel;
  primarySkill: SelectModel;
  workExperience: DatePickerModel;
  englishLevel: SelectModel;
  otherSkills: InputModel[];
  description: InputModel;

  constructor(data: any) {
    this.projectName = data[0];
    this.location = data[1];
    this.requestDate = data[2];
    this.projectStartDate = data[3];
    this.status = data[4];
    this.resumeLink = data[5];
    this.primarySkill = data[6];
    this.workExperience = data[7];
    this.englishLevel = data[8];

    let index: number = 9;

    while (data[index].placeholder === 'Other Skill') {
      index += 1;
    }

    this.otherSkills = data.slice(9, index);
    this.description = data[index];
  }
}
