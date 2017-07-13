import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './person-page-filter.component';
import { MaterialModule, MdDatepickerModule, MdNativeDateModule } from '@angular/material';
import { AccordionModule } from 'ngx-accordion'

@NgModule({
  imports: [CommonModule,MaterialModule,AccordionModule,MdDatepickerModule, MdNativeDateModule],
  declarations: [FilterComponent],
  exports: [FilterComponent],
})
export class FilterModule{
}
