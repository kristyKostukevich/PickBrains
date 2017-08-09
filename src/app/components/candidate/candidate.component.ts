import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CandidateCardItem } from '../../interfaces/candidate-card-item';

@Component({
  selector: 'candidate-card',
  templateUrl: 'candidate.component.html',
  styleUrls: ['candidate.component.scss'],
})
export class CandidateComponent {
  @Input() item: CandidateCardItem;
  @Output() onChanged = new EventEmitter<any>();

  filterSend(elem,group){
    this.onChanged.emit({id: elem,group : group});
  }

}
