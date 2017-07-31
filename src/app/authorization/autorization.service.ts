import { Injectable, EventEmitter } from '@angular/core';


@Injectable()
export class AuthorizationService {
  showHeader: EventEmitter<boolean> = new EventEmitter<boolean>();
  private flag: boolean = false;

  constructor() {}

  showHeaderToggle() {
    this.flag = true;
    this.showHeader.emit(this.flag);
  }
  closeHeaderToggle() {
    this.flag = false;
    this.showHeader.emit(this.flag);
  }
  getEmitter() {
    return this.showHeader;
  }


}
