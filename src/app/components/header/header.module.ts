import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdMenuModule, MdIconModule } from '@angular/material';
import { GlobalHeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { ShowMenuService } from './show-menu.service';
import { HttpService } from '../../http-service/http-service';

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
  providers: [ShowMenuService, HttpService],
})
export class GlobalHeaderModule {
}
