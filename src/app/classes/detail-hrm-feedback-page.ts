import { InputModel } from 'app/interfaces/input-model';
import { DatePickerModel } from 'app/interfaces/date-picker-model';

export class DetailHrmFeedbackPage {
  vacancyName: InputModel;
  name: InputModel;
  date: DatePickerModel;
  reason: InputModel;
  readinessToWork: InputModel;
  readinessToBusinessTrip: InputModel;
  motivation: InputModel;
  englishLevel: InputModel;
  salary: InputModel;
  comment: InputModel;

  constructor(data: any) {
    this.vacancyName = new InputModel(data.vacancyName, 'Project name', false, true);
    this.name = new InputModel(data.userName, 'HR-manager name', false, true);
    this.date = new DatePickerModel(data.date, 'Date', false, true, true);
    this.reason = new InputModel(data.changeReason, 'Reason for change of job', false, true);
    this.readinessToWork = new InputModel(data.readyToWork, 'Readiness to start work', false, true);
    this.readinessToBusinessTrip = new InputModel(data.readyToTravel, 'Readiness to business trip', false, true);
    this.motivation = new InputModel(data.motivation, 'Motivation(what interesting)', false, true);
    this.englishLevel = new InputModel(data.lvl, 'English level', false, true);
    this.salary = new InputModel(data.salaryWish, 'Expected salary', false, true);
    this.comment = new InputModel(data.other, 'Comment', false, true);
  }
}
