import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPersonComponent } from './filter-person.component';
import { AccordionModule } from 'ngx-accordion';
import { MaterialModule, MdDatepickerModule, MdNativeDateModule } from '@angular/material';
import { CheckBoxModule } from '../../check-box/check-box.module';
import { DataPickerFilterModule } from '../../data-picker-filter/data-picker-filter.module';
import { InputFilterModel } from '../../../interfaces/input-filter';
import { InputFilterModule } from '../../input-filter/input-filter.module';

@NgModule({
  imports: [CommonModule,
    MaterialModule,
    AccordionModule,
    MdDatepickerModule,
    MdNativeDateModule,
    CheckBoxModule,
    DataPickerFilterModule,
    InputFilterModule,
  ],
  declarations: [FilterPersonComponent],
  exports: [FilterPersonComponent],
})
export class FilterPersonModule{
}
