import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.scss'],
})

export class MenuComponent implements OnInit {

  @Input() menuItems: LinkAndLabel [];
  toggleFlags: boolean[];

  ngOnInit() {
    this.toggleFlags = [];
    this.toggleFlags[0] = true;
  }

  toggle(item: string) {
    console.log(item);
    let index: number = 0;
    for (const i of this.menuItems) {
      this.toggleFlags[index] = false;
      if (i.label === item) {
        this.toggleFlags[index] = true;
      }
      index += 1;
    }
  }
}

export interface LinkAndLabel {
  label: string;
  link: string;
}
