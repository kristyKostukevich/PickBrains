import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPersonComponent } from './filter-person.component';
import { AccordionModule } from 'ngx-accordion';
import { MaterialModule, MdDatepickerModule, MdNativeDateModule } from '@angular/material';
import { CheckBoxModule } from '../../check-box/check-box.module';

@NgModule({
  imports: [CommonModule,MaterialModule,AccordionModule,MdDatepickerModule, MdNativeDateModule,CheckBoxModule],
  declarations: [FilterPersonComponent],
  exports: [FilterPersonComponent],
})
export class FilterPersonModule{
}
