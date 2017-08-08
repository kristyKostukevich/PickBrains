import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SpinnerService {
  showSpinner: EventEmitter<boolean> = new EventEmitter<boolean>();
  private flag: boolean;

  startSpinner() {
    this.flag = true;
    this.showSpinner.emit(this.flag);
  }

  stopSpinner() {
    this.flag = false;
    this.showSpinner.emit(this.flag);
  }

  getEmitter() {
    return this.showSpinner;
  }

  constructor() {
  }
}

