import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MdSelectModule } from '@angular/material';
import { SelectComponent } from './select.component';

@NgModule({
  declarations: [SelectComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    MdSelectModule,
  ],
  providers: [],
  exports: [SelectComponent],
})
export class SelectModule {
}
