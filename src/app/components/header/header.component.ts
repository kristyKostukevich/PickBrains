import { Component} from '@angular/core';



@Component({
  selector: 'global-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
})
export class GlobalHeaderComponent {
  public person = '';

  constructor() {
    const data = JSON.parse(localStorage.getItem('user'));
    this.person = `${data.firstName} ${data.secondName}`;
  }

}
