import { Component, Input } from '@angular/core';
import { TechInterview } from 'app/tech-page/interview-list/interview-list.component';

@Component({
  selector: 'interview-card',
  templateUrl: 'interview.component.html',
  styleUrls: ['interview.component.scss'],
})
export class InterviewComponent {
  @Input() item: TechInterview;
}
