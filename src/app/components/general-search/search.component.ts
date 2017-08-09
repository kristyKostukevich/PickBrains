import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../../http-service/http-service';

@Component({
  selector: 'global-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.scss'],
})
export class SearchLineComponent {
  @Input() info: string;
  @Output() sendSearchLine = new EventEmitter<any>();
  list: any[] = [];

  constructor(private httpService: HttpService) {
  }

  updateCheckedOptions(event) {
    this.info = event;
    if (event !== '')
      this.httpService.getData(`http://192.168.43.31:1337/api/candidates/trie-search?candidate=${event}`).subscribe((res) => {
          this.list = res.json();
          this.list = this.list.slice(0, 5);
          this.list.splice(0, 0, {name: event});
      });
    else
      this.list = [];
  }

  enterClick(event) {
    if (event.keyCode === 13) {
      this.sendSearchLine.emit(this.info);
    }
    this.list = [];
  }

  changeInfo(item) {
    this.info = item.name;
    this.list = [];
    this.sendSearchLine.emit(this.info);
  }
}
