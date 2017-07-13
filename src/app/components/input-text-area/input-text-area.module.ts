import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdInputModule } from '@angular/material';
import { InputTextAreaComponent } from './input-text-area.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MdInputModule,
    FormsModule,
  ],
  declarations: [InputTextAreaComponent],
  exports: [InputTextAreaComponent],
})
export class InputTextAreaModule {

}
