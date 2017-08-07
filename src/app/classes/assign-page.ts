import { SelectModel } from 'app/interfaces/select-model';
import { DatePickerModel } from 'app/interfaces/date-picker-model';
import { InputModel } from 'app/interfaces/input-model';

export class AssignPage {
  typeOfInterview: SelectModel;
  interviewer: SelectModel;
  item: SelectModel;
  date: DatePickerModel;
  time: InputModel;

  constructor(interviewTypes: string[],
              interviewers: string[],
              candidates: string[],
              type: string) {
    this.typeOfInterview = new SelectModel('HRM interview', 'Interview type', interviewTypes);
    this.interviewer = new SelectModel('', 'Interviewer', interviewers);
    const valuePlaceholder = (type === 'vacancy') ? 'Candidate' : 'Vacancy';
    this.item = new SelectModel('', valuePlaceholder, candidates);
    this.date = new DatePickerModel(null, 'Date');
    this.time = new InputModel('', 'Time');
  }

  setInterviewerOptions(data: any[]) {
    this.interviewer = new SelectModel('', 'Interviewer', data);
  }
}
