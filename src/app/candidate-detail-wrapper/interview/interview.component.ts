import { Component, Input, OnInit } from '@angular/core';
import { InterviewCard } from '../../classes/interview-card';
import { UserService } from 'app/core-service/user.service';
import { InterviewService } from './interview.service';

@Component({
  selector: 'interview-card',
  templateUrl: 'interview.component.html',
  styleUrls: ['interview.component.scss'],
})
export class InterviewComponent implements OnInit {
  @Input() item: InterviewCard;
  time: string;
  userName: string;
  type: string;

  constructor(private userService: UserService, private interviewService: InterviewService) {
    this.userName = this.userService.realName;
  }

  ngOnInit() {
    this.interviewService.setData(this.item.interviewId);
    this.getTime();
    this.getType();
  }

  getTime() {
    const minutes = this.item.date
      .getMinutes() === 0 ? '00' : this.item.date.getMinutes().toString();
    this.time = `${this.item.date.getHours()}:${minutes}`;
  }

  isInterviewer() {
    return this.userName === this.item.userName;
  }

  getType() {
    this.type = this.item.type === 'admin' ? 'HRM' : this.item.type;
  }
}
