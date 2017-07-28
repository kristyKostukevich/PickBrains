import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ShowMenuService {
  showMenu: EventEmitter<boolean> = new EventEmitter<boolean>();
  private flag: boolean = false;

  menuToggle() {
    this.flag = !this.flag;
    this.showMenu.emit(this.flag);
  }

  getEmitter() {
    return this.showMenu;
  }

  constructor() {
  }
}
