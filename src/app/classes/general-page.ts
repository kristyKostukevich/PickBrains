import { InputModel } from '../interfaces/input-model';
import { SelectModel } from '../interfaces/select-model';
import { DatePickerModel } from '../interfaces/date-picker-model';

export class GeneralPage {

  id: number;
  projectName: InputModel;
  location: SelectModel;
  requestDate: DatePickerModel;
  projectStartDate: DatePickerModel;
  status: SelectModel;
  resumeLink: InputModel;
  primarySkill: SelectModel;
  workExperience: DatePickerModel;
  englishLevel: SelectModel;
  otherSkills: InputModel[] = [];
  description: InputModel;

  constructor(data: any) {
    this.projectName.placeholder = 'Project Name';
    this.projectName.value = data.name;

    this.location.placeholder = 'Location';
    this.location.value = data.city;

    this.requestDate.placeholder = 'Placeholder';
    this.requestDate.value = data.request_date;

    this.projectStartDate.placeholder = 'Project Start Date';
    this.projectStartDate.value = data.start_date;

    this.status.placeholder = 'Status';
    this.status.value = data.status;
    this.status.options = ['1', '2', '3'];

    this.resumeLink.placeholder = 'Placeholder';
    this.resumeLink.value = data.linkedin || '';

    this.primarySkill.placeholder = 'Primary Skill';
    this.primarySkill.value = data.skill_name;
    //this.primarySkill.level = data.primary_skill_lvl;

    this.workExperience.placeholder = 'Work Experience';
    this.workExperience.value = new Date(2017, 1, 1);

    this.englishLevel.placeholder = 'English';
    this.englishLevel.value = 'Elementary';
    this.englishLevel.options = ['Elementary', '2', '3'];

    let index: number = 0;
    for (const i of data.secondary_skills) {
      this.otherSkills[index].placeholder = 'Other Skill';
      this.otherSkills[index].value = i.skill_name;
      //this.otherSkills[index].level = i.lvl;
      index += 1;
    }

    this.description.placeholder = 'Placeholder';
    this.description.value = '';
    // this.projectName = data[0];
    // this.location = data[1];
    // this.requestDate = data[2];
    // this.projectStartDate = data[3];
    // this.status = data[4];
    // this.resumeLink = data[5];
    // this.primarySkill = data[6];
    // this.workExperience = data[7];
    // this.englishLevel = data[8];
    //
    // let index: number = 9;
    //
    // while (data[index].placeholder === 'Other Skill') {
    //   index += 1;
    // }
    //
    // this.otherSkills = data.slice(9, index);
    // this.description = data[index];
  }
}
