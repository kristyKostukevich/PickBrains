import { Component, Input, OnInit } from '@angular/core';
import { InterviewCard } from '../../classes/interview-card';

@Component({
  selector: 'interview-card',
  templateUrl: 'interview.component.html',
  styleUrls: ['interview.component.scss'],
})
export class InterviewComponent implements OnInit {
  @Input() item: InterviewCard;
  time: string;

  ngOnInit() {
    this.getTime();
  }

  getTime() {
    const minutes = this.item.date.getMinutes() === 0 ? '00' : this.item.date.getMinutes().toString();
    this.time = `${this.item.date.getHours()}:${minutes}`;
  }
}
