import { Component } from '@angular/core';
import { LayoutService } from './layout.service';
import { SpinnerService } from '../core-service/spinner.servise';

@Component({
  selector: 'layout',
  templateUrl: 'layout.component.html',
  styleUrls: ['layout.component.scss'],

})
export class LayoutComponent {
  flag: boolean;
  statusSpinner: boolean;
  constructor(
    private layout: LayoutService,
    private spinner: SpinnerService,
  ) {
    this.statusSpinner = false;
    this.layout.getEmitter().subscribe(flag => this.flag = flag);
    this.spinner.getEmitter().subscribe(flag => this.statusSpinner = flag);
  }

  ngOnInit() {

  }
}
