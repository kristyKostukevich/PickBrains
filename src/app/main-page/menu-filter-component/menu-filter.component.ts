import { Component } from '@angular/core';
import { AuthorizationService } from '../../authorization/authorization.service';
import { HttpService } from '../../http-service/http-service';


@Component({
  selector: 'person-page-filter',
  templateUrl: 'menu-filter.component.html',
  styleUrls: ['menu-filter.component.scss'],
})
export class FilterComponent {
  user: string;
  constructor(private authorization: AuthorizationService, private http: HttpService) {
    this.authorization.getEmitter().subscribe(data =>
      this.user = data.type);
  }

  ngOnInit() {
    this.http
      .getData(`http://localhost:1337/api/user`)
      .subscribe((data) => {
        this.user = data.json().type;
      });
  }


}

