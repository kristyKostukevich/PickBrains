import { InputModel } from 'app/interfaces/input-model';
import { DatePickerModel } from 'app/interfaces/date-picker-model';

export class DetailTechFeedbackPage {
  vacancyName: InputModel;
  name: InputModel;
  date: DatePickerModel;
  primarySkill: InputModel;
  secondarySkills: InputModel[];
  comment: InputModel;

  constructor(data: any) {
    this.vacancyName = new InputModel(data.vacancyName, 'Project Name', false, undefined, undefined, true);
    this.name = new InputModel(data.userName, 'Technical specialist name', false, undefined, undefined, true);
    this.date = new DatePickerModel(data.date, 'Date', false, undefined, true, true);
    this.primarySkill = new InputModel(data.skillName, 'Primary skill', false, undefined, undefined, true, data.primarySkillLvl);
    this.secondarySkills = [];
    if (data.otherSkills) {
      data.otherSkills.forEach((item) => {
        this.secondarySkills
          .push(new InputModel(item.skillName, 'Other skill', false, undefined, undefined, true, item.skillLvl));
      });
    }
    this.comment = new InputModel(data.other, 'Comment', false, undefined, undefined, true);
  }
}
