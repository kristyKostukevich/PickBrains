import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter.component';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [CommonModule,MaterialModule],
  declarations: [FilterComponent],
  exports: [FilterComponent,MaterialModule],
})
export class FilterModule{
}
