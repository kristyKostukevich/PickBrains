import { InputModel } from 'app/interfaces/input-model';
import { DatePickerModel } from 'app/interfaces/date-picker-model';
import { SelectModel } from 'app/interfaces/select-model';

export class AddTechFeedbackPage {
  name: InputModel;
  date: DatePickerModel;
  primarySkill: SelectModel;
  secondarySkills: SelectModel[];
  nextSecondarySkill: SelectModel;
  comment: InputModel;

  constructor(skillOptions: string[]) {
    this.name = new InputModel('', 'Technical specialist name', true);
    this.date = new DatePickerModel(new Date(), 'Date', true);
    this.primarySkill = new SelectModel('', 'Primary skill', skillOptions);
    this.secondarySkills = [];
    this.nextSecondarySkill = new SelectModel('', 'Secondary skill', skillOptions);
    this.comment = new InputModel('', 'Comment');
  }

  setName(name: string) {
    this.name.value = name;
  }

  addSkill() {
    const curr = this.nextSecondarySkill;

    this.secondarySkills.push(curr);
    this.nextSecondarySkill = new SelectModel('', 'Secondary skill', curr.options
      .filter(skill => skill !== curr.value));
  }

  removeOptions() {
    const curr = this.primarySkill;

    this.nextSecondarySkill = new SelectModel('', 'Secondary skill', curr.options
      .filter(skill => skill !== curr.value));
  }
}

