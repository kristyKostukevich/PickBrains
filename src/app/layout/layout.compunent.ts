import { Component } from '@angular/core';
import { LayoutService } from './layout.service';
import { AuthorizationService } from '../authorization/autorization.service';

@Component({
  selector: 'layout',
  templateUrl: 'layout.component.html',

})
export class LayoutComponent {
  flag: boolean;
  headerFlag: boolean;
  constructor(private layout: LayoutService, private authorization: AuthorizationService) {
    this.layout.getEmitter().subscribe(flag => this.flag = flag);
    this.authorization.getEmitter().subscribe(flag => this.headerFlag = flag);
  }

  ngOnInit() {
    if (localStorage.getItem('user'))
      this.headerFlag = true;
  }

}
