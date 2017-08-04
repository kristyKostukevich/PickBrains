import { SelectModel } from 'app/interfaces/select-model';
import { DatePickerModel } from 'app/interfaces/date-picker-model';
import { InputModel } from 'app/interfaces/input-model';

export class AssignPage {
  typeOfInterview: SelectModel;
  interviewer: SelectModel;
  value: SelectModel;
  date: DatePickerModel;
  time: InputModel;

  constructor(data: any,
              interviewTypes: string[],
              interviewers: string[],
              candidates: string[],
              type: string) {
    this.typeOfInterview = new SelectModel(data.interviewType, 'Interview type', interviewTypes);
    this.interviewer = new SelectModel(data.interviewer, 'Interviewer', interviewers);
    const valuePlaceholder = (type === 'vacancy') ? 'Candidate' : 'Vacancy';
    this.value = new SelectModel(data.value, valuePlaceholder, candidates);
    this.date = new DatePickerModel(data.date, 'Date');
    this.time = new InputModel(data.time, 'Time');
  }

  setInterviewerOptions(data: any[]) {
    this.interviewer = new SelectModel('', 'Interviewer', data);
  }
}
