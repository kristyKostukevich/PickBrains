import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() menuItems: string[];
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
      if (i === item) {
        this.toggleFlags[index] = true;
      }
      index += 1;
    }
  }
}
