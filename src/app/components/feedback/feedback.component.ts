import { Component, Input } from '@angular/core';
import { FeedbackCardItem } from 'app/interfaces/feedback-card-item';

@Component({
  selector: 'feedback-card',
  templateUrl: 'feedback.component.html',
  styleUrls: ['feedback.component.scss'],
})
export class FeedbackComponent{
  @Input() item: FeedbackCardItem;
}
