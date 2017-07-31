import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdMenuModule, MdIconModule } from '@angular/material';
import { GlobalHeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { HttpService } from '../../http-service/http-service';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdMenuModule,
    MdIconModule,
    RouterModule,
  ],
  providers: [HttpService],
  declarations: [GlobalHeaderComponent],
  exports: [GlobalHeaderComponent],
})
export class GlobalHeaderModule{
}
