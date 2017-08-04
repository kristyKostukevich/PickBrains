import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdInputModule } from '@angular/material';
import { InputPhoneComponent } from './input-phone-number.component';

@NgModule({
  imports: [
    CommonModule,
    MdInputModule,
    FormsModule,
  ],
  declarations: [InputPhoneComponent],
  exports: [InputPhoneComponent],
})
export class InputPhoneModule {
}
