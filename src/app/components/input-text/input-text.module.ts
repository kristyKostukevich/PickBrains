import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdInputModule } from '@angular/material';
import { InputTextComponent } from './input-text.component';

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
