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


  constructor(englishOptions: string[]) {
    this.name = new InputModel('', 'HR-manager name', true);
    this.date = new DatePickerModel(new Date(), 'Date', true);
    this.reason = new InputModel('', 'Reason for change of job  ');
    this.readinessToWork = new SelectModel('',
      'Readiness to start work',
      [
        'Ready',
        'Not ready',
      ],
    );
    this.readinessToBusinessTrip = new SelectModel('',
      'Readiness to business trip',
      [
        'Ready',
        'Not ready',
      ],
    );
    this.motivation = new InputModel('', 'Motivation(what interesting)');
    this.englishLevel = new SelectModel('', 'English level', englishOptions);
    this.salary = new InputModel('', 'Expected salary');
    this.comment = new InputModel('', 'Comment');
  }

  setName(name: string) {
    this.name.value = name;
  }
}
