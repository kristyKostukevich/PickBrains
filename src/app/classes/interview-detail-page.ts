import { InputModel } from 'app/interfaces/input-model';
import { DatePickerModel } from 'app/interfaces/date-picker-model';

export class InterviewDetailPage {
  vacancyName: InputModel;
  candidateName: InputModel;
  date: DatePickerModel;
  primarySkill: InputModel;
  secondarySkills: InputModel[];

  constructor(data: any) {
    this.vacancyName = new InputModel(data.vacancyName, 'Project name', false, undefined, undefined, true);
    this.candidateName = new InputModel(data.candidateName, 'Candidate name', false, undefined, undefined, true);
    this.date = new DatePickerModel(data.date, 'Date', false, undefined, true, true);
    this.primarySkill = new InputModel(data.skillName, 'Primary skill', false, undefined, undefined, true, data.primarySkillLvl);
    this.secondarySkills = [];
    if (data.secondarySkills) {
      data.secondarySkills.forEach((item) => {
        this.secondarySkills
          .push(new InputModel(item.skillName, 'Secondary skill', false, undefined, undefined, true, item.lvl));
      });
    }
  }
}
