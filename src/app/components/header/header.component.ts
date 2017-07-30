import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../authorization/authorization.service';
import { HttpService } from '../../http-service/http-service';


@Component({
  selector: 'global-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
})
export class GlobalHeaderComponent implements OnInit{
  public person = '';

  constructor(private authorization: AuthorizationService, private http: HttpService) {
    this.authorization.getEmitter().subscribe(data =>
      this.person = `${data.firstName} ${data.secondName}`);
  }

  ngOnInit() {
    this.http
      .getData(`http://localhost:1337/api/user`)
      .subscribe((data) => {
        this.person = `${data.json().firstName} ${data.json().secondName}`;
      });
  }

}
