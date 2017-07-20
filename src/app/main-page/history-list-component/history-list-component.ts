import { Component } from '@angular/core';
import { HttpService } from '../vacancy-list-component/vacancy-list-component.service';

@Component({
  selector: 'history-page',
  templateUrl: `./history-list-component.html`,
  styleUrls: ['history-list-component.scss'],
  providers: [HttpService],
})

export class HistoryListComponent {
}
