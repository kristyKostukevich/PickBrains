import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class LayoutService {
  showNotification: EventEmitter<boolean> = new EventEmitter<boolean>();
  private flag: boolean = false;

  notificationToggle() {
    this.flag = !this.flag;
    this.showNotification.emit(this.flag);
  }
  logout() {
    this.flag = false;
    this.showNotification.emit(this.flag);
  }
  getEmitter() {
    return this.showNotification;
  }

  constructor() {
  }
}
