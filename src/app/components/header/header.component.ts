import { Component } from '@angular/core';
import { ShowMenuService } from 'app/components/header/show-menu.service';

@Component({
  selector: 'global-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
})
export class GlobalHeaderComponent {
  public person = 'User';
  flag: boolean = false;

  constructor(private showMenu: ShowMenuService) {
    this.showMenu.getEmitter().subscribe(flag => {
      this.flag = flag;
    });
  }

  menuToggle() {
    this.showMenu.menuToggle();
  }
}
