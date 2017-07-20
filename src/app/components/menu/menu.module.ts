import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule } from '@angular/material';
import { MenuComponent } from './menu.component';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
  ],
  declarations: [MenuComponent],
  exports: [MenuComponent],
})
export class MenuModule {
}
