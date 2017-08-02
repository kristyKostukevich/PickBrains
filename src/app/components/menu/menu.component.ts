import { Component, Input, OnInit } from '@angular/core';
import { ShowMenuService } from 'app/components/header/show-menu.service';
import { MenuService } from 'app/components/menu/menu.service';

@Component({
  selector: 'menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() menuItems: any[];
  @Input() id: number;
  @Input() type: string;

  showMenuFlag: boolean = false;

  constructor(private showMenu: ShowMenuService, private menuService: MenuService) {
    this.showMenu.getEmitter().subscribe((flag) => {
      this.showMenuFlag = flag;
    });
  }

  ngOnInit() {
    this.menuService.setData(this.type, this.id);
  }

  toggleMenuItem() {
    if (document.documentElement.clientWidth <= 800) {
      this.showMenu.menuToggle();
    }
  }
}
