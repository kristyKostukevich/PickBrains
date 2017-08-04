import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdInputModule } from '@angular/material';
import { InputNumericTextComponent } from './input-numeric-text.component';


@NgModule({
  imports: [
    CommonModule,
    MdInputModule,
    FormsModule,
  ],
  declarations: [InputNumericTextComponent],
  exports: [InputNumericTextComponent],
})
export class InputNumericTextModule {
}
