import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFilterComponent } from './input-filter.component';
import { FormsModule } from '@angular/forms';
import { MdInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdInputModule,
    FormsModule,
  ],
  declarations: [InputFilterComponent],
  exports: [InputFilterComponent],
})
export class InputFilterModule {
}
