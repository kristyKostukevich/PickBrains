import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdInputModule } from '@angular/material';
import { InputTextAreaComponent } from './input-text-area.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdInputModule,
  ],
  declarations: [InputTextAreaComponent],
  exports: [InputTextAreaComponent],
})
export class InputTextAreaModule {

}
