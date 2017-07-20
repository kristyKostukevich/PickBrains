import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TempComponent } from './temp.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TempComponent],
  exports: [TempComponent],
})
  export class TempModule{
}
