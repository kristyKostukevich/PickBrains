import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdInputModule } from '@angular/material';
import { InputEmailComponent } from './input-email.component';

@NgModule({
  imports: [
    CommonModule,
    MdInputModule,
    FormsModule,
  ],
  declarations: [InputEmailComponent],
  exports: [InputEmailComponent],
})
export class InputEmailModule {
}
