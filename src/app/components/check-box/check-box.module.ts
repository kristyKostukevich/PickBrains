import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckBoxComponent } from './check-box.component';
import { MdCheckboxModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdCheckboxModule,
  ],
  declarations: [CheckBoxComponent],
  exports: [CheckBoxComponent],
})
export class CheckBoxModule {
}
