import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonAddComponent } from './button.component';
import { MdIconModule, MdButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdIconModule,
    RouterModule,
  ],
  declarations: [ButtonAddComponent],
  exports: [ButtonAddComponent],
})
export class ButtonAddModule {
}
