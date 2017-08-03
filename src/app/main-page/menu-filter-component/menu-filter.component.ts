import { Component } from '@angular/core';
import { UserService } from '../../core-service/user.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'person-page-filter',
  templateUrl: 'menu-filter.component.html',
  styleUrls: ['menu-filter.component.scss'],
})
 export class FilterComponent {
  user: Observable<string>;
  constructor (private userService: UserService) {

  }
  ngOnInit() {
    this.user = this.userService.type;
  }

}
