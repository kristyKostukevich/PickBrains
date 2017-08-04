import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'global-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.scss'],
})
export class SearchLineComponent {
  @Input() info: string;
  @Output() sendSearchLine = new EventEmitter<any>();

  updateCheckedOptions(event) {
    this.info = event;
  }

  enterClick(event) {
    if (event.keyCode === 13) {
      this.sendSearchLine.emit(this.info);
    }
  }


}
