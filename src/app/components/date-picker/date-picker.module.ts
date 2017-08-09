import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdDatepickerModule, MdNativeDateModule, MdInputModule, MaterialModule } from '@angular/material';
import { DatePickerComponent } from './date-picker.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdInputModule,
  ],
  declarations: [DatePickerComponent],
  exports: [DatePickerComponent],
})
export class DatePickerModule {

}
