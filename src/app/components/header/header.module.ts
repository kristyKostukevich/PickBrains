import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdMenuModule, MdIconModule } from '@angular/material';
import { GlobalHeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdMenuModule,
    MdIconModule,
    RouterModule,
  ],
  declarations: [GlobalHeaderComponent],
  exports: [GlobalHeaderComponent],
})
export class GlobalHeaderModule{
}
