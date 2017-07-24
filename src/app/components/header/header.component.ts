import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http-service/http-service';

@Component({
  selector: 'global-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
  providers: [HttpService],
})
export class GlobalHeaderComponent implements OnInit {

  constructor(private httpService: HttpService) {
  } ;

  public person = 'user';

  ngOnInit() {
    this.httpService
      .getData(`http://localhost:1337/api/user`)
      .subscribe((data) => {
        this.person = data.json().first_name+' '+data.json().second_name;
      });
  }
}
