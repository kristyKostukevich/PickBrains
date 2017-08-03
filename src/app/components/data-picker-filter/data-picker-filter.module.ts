import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataPickerFilterComponent } from './data-picker-filter.component';
import { MdDatepickerModule, MdNativeDateModule, MdInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdInputModule,
  ],
  declarations: [DataPickerFilterComponent],
  exports: [DataPickerFilterComponent],
})
export class DataPickerFilterModule {
}
