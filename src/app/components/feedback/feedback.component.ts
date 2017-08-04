import { Component, Input } from '@angular/core';
import { FeedbackCard } from '../../classes/feedback-card';

@Component({
  selector: 'feedback-card',
  templateUrl: 'feedback.component.html',
  styleUrls: ['feedback.component.scss'],
})
export class FeedbackComponent {
  @Input() item: FeedbackCard;
  currDate: Date = new Date();//не забыть сказать бэку!

  isSkill() {
    return !(this.item.skillName === null);
  }
}
