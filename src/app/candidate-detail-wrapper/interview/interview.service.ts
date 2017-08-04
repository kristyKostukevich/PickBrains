import { Injectable } from '@angular/core';

@Injectable()
export class InterviewService {
  private interviewId: number;

  constructor() {
  }

  setData(data: number) {
    this.interviewId = data;
  }

  getData() {
    return this.interviewId;
  }
}
