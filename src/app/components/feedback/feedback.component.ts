import { Component, Input, OnInit } from '@angular/core';
import { FeedbackCard } from '../../classes/feedback-card';

@Component({
  selector: 'feedback-card',
  templateUrl: 'feedback.component.html',
  styleUrls: ['feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {
  @Input() item: FeedbackCard;
  time: string;

  ngOnInit() {
    this.getTime();
  }

  getTime() {
    const minutes = this.item.date
      .getMinutes() === 0 ? '00' : this.item.date.getMinutes().toString();
    this.time = `${this.item.date.getHours()}:${minutes}`;
  }

  isSkill(){
    return !(this.item.skillName === null);
  }
}
