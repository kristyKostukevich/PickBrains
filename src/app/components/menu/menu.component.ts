import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShowMenuService } from 'app/components/header/show-menu.service';
import { MenuService } from 'app/components/menu/menu.service';

@Component({
  selector: 'menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() menuItems: string[];
  @Input() id: number;
  @Input() type: string;

  showMenuFlag: boolean = false;
  toggleFlags: boolean[];

  constructor(private router: Router, private showMenu: ShowMenuService,
              private menuService: MenuService) {
    this.toggleFlags = [];
    this.toggleFlags[0] = true;
    this.showMenu.getEmitter().subscribe((flag) => {
      this.showMenuFlag = flag;
    });
  }

  ngOnInit() {
    this.menuService.setData(this.type, this.id);
  }

  toggleMenuItem(item: string) {
    if (document.documentElement.clientWidth <= 800) {
      this.showMenu.menuToggle();
    }

    let index: number = 0;
    for (const i of this.menuItems) {
      this.toggleFlags[index] = false;
      if (i === item) {
        this.toggleFlags[index] = true;
      }
      index += 1;
    }
  }

  getParentPath() {
    switch (this.type) {
      case 'candidate':
        return '/person-page/detail-candidate';
      case 'vacancy':
        return '/vacancy-page/detail-vacancy';
      default:
        break;
    }
  }

  goToItem(item: string) {
    this.menuService.setItemType(item);
    this.toggleMenuItem(item);
    const parentPath = this.getParentPath();
    const path = `${parentPath}/${this.id}/${item.replace(/\s/g, '-')
      .toLowerCase()}`;
    this.router.navigate([path]);
  }
}
