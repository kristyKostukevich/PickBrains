import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckBoxComponent } from './check-box.component';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [CheckBoxComponent],
  exports: [CheckBoxComponent],
})
export class CheckBoxModule {
}
