import { Component, Input, OnInit } from '@angular/core';
import { InterviewCard } from '../../classes/interview-card';
import { UserService } from 'app/core-service/user.service';

@Component({
  selector: 'interview-card',
  templateUrl: 'interview.component.html',
  styleUrls: ['interview.component.scss'],
})
export class InterviewComponent implements OnInit {
  @Input() item: InterviewCard;
  userName: string;
  type: string;
  link: string;

  constructor(private userService: UserService) {
    this.userName = this.userService.realName;
  }

  ngOnInit() {
    this.getType();
  }

  isInterviewer() {
    return this.userName === this.item.userName;
  }

  getType() {
    this.type = this.item.type === 'admin' ? 'HRM' : this.item.type;
    this.link = `add-${this.type.toLowerCase()}-feedback`;
  }
}
