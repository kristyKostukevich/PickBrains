import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdDatepickerModule, MdNativeDateModule, MdInputModule } from '@angular/material';
import { DatepickerComponent } from './datepicker.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MdDatepickerModule,
    MdNativeDateModule,
    FormsModule,
    MdInputModule,
  ],
  declarations: [DatepickerComponent],
  exports: [DatepickerComponent],
})
export class DatepickerModule {
}
