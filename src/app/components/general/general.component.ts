import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GeneralPage } from '../../classes/general-page';

@Component({
  selector: 'general',
  templateUrl: 'general.component.html',
  styleUrls: ['general.component.scss'],
})

export class GeneralComponent {
  @Input() model: GeneralPage;
  @Output() modelChange = new EventEmitter<GeneralPage>();

  onModelChange() {
    this.modelChange.emit(this.model);
  }
}
