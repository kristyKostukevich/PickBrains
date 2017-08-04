import { InputModel } from 'app/interfaces/input-model';
import { DatePickerModel } from 'app/interfaces/date-picker-model';
import { SelectModel } from 'app/interfaces/select-model';

export class AddHrmFeedbackPage {
  name: InputModel;
  date: DatePickerModel;
  reason: InputModel;
  readinessToWork: SelectModel;
  readinessToBusinessTrip: SelectModel;
  motivation: InputModel;
  englishLevel: SelectModel;
  salary: InputModel;
  comment: InputModel;

  constructor(data: any, englishOptions: string[]) {
    this.name = new InputModel(data.name, 'HR-manager name', true);
    this.date = new DatePickerModel(new Date(), 'Date', true);
    this.reason = new InputModel(data.reason, 'Reason for change of job  ');
    this.readinessToWork = new SelectModel(
      data.readinessToWork,
      'Readiness to start work',
      [
        'Ready',
        'Not ready',
      ],
    );
    this.readinessToBusinessTrip = new SelectModel(
      data.readinessToBusinessTrip,
      'Readiness to business trip',
      [
        'Ready',
        'Not ready',
      ],
    );
    this.motivation = new InputModel(data.motivation, 'Motivation(what interesting)');
    this.englishLevel = new SelectModel(data.englishLevel, 'English level', englishOptions);
    this.salary = new InputModel(data.salary, 'Expected salary');
    this.comment = new InputModel(data.comment, 'Comment');
  }

  setName(name: string) {
    this.name.value = name;
  }
}
