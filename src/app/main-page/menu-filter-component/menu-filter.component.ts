import { Component } from '@angular/core';
import { UserService } from '../../core-service/user.service';


@Component({
  selector: 'person-page-filter',
  templateUrl: 'menu-filter.component.html',
  styleUrls: ['menu-filter.component.scss'],
})
 export class FilterComponent {
  user: string;
 // constructor(private userService: UserService) {
 //   this.user = this.userService.getUserType();
  //}

}
