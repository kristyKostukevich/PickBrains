import { Component, OnInit } from '@angular/core';
import { HttpService } from './temp.component.service';

@Component({
  selector: 'temp-selector',
  templateUrl: 'temp.component.html',
  styleUrls: ['temp.component.scss'],
  providers: [HttpService],
})
export class TempComponent implements OnInit {

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.getData().then(res => {
      console.log(res.json());
    });
  }
}

