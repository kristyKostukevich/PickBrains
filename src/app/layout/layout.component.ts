import { Component } from '@angular/core';
import { LayoutService } from './layout.service';

@Component({
  selector: 'layout',
  templateUrl: 'layout.component.html',

})
export class LayoutComponent {
  flag: boolean;
  constructor(
    private layout: LayoutService) {
    this.layout.getEmitter().subscribe(flag => this.flag = flag);
  }

  ngOnInit() {

  }
}
