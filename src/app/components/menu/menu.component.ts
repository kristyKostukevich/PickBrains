import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ShowMenuService } from 'app/components/header/show-menu.service';

@Component({
  selector: 'menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.scss'],
})
export class MenuComponent implements OnInit, OnChanges {
  @Input() menuItems: string[];
  @Input() id: number;
  @Input() type: string;
  flag: boolean = false;

  toggleFlags: boolean[];

  constructor(private router: Router, private showMenu: ShowMenuService) {
    this.toggleFlags = [];
    this.showMenu.getEmitter().subscribe(flag => {
      this.flag = flag;
    });
  }

  ngOnChanges() {
  }

  ngOnInit() {
    this.goToItem('General');
  }

  toggle(item: string) {
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

  getParent() {
    console.log(this.type);
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
    this.toggle(item);
    const parentPath = this.getParent();
    const path = `${parentPath}/${this.id}/${item.replace(/\s/g, '-')
      .toLowerCase()}`;
    this.router.navigate([path],
      {
        queryParams: {
          itemType: item,
          type: this.type,
          id: this.id,
        },
      },
    );
  }
}
