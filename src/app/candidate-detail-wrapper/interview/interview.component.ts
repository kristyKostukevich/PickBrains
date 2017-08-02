import { Component, Input } from '@angular/core';
import { InterviewCard } from '../../classes/interview-card';

@Component({
  selector: 'interview-card',
  templateUrl: 'interview.component.html',
  styleUrls: ['interview.component.scss'],
})
export class InterviewComponent {
  @Input() item: InterviewCard;
}
