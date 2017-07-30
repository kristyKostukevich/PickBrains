import { Component } from '@angular/core';
import { HttpService } from '../../http-service/http-service';

@Component({
  selector: 'history-page',
  templateUrl: `./history-list-component.html`,
  styleUrls: ['../person-list-component/person-list.component.scss'],
  providers: [HttpService],
})

export class HistoryListComponent {
}
