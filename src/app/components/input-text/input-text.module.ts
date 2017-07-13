import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdInputModule } from '@angular/material';
import { InputTextComponent } from './input-text.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MdInputModule,
    FormsModule,
  ],
  declarations: [InputTextComponent],
  exports: [InputTextComponent],
})
export class InputTextModule {
}
