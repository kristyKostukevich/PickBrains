import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule } from '@angular/material';
import { MenuComponent } from './menu.component';
import { AppRoutingModule } from '../../app-routing.module';
import { ShowMenuService } from 'app/components/header/show-menu.service';

@NgModule({
  imports: [
    AppRoutingModule,
    CommonModule,
    MdButtonModule,
  ],
  declarations: [MenuComponent],
  exports: [MenuComponent],
  providers: [ShowMenuService,
  ],
})
export class MenuModule {
}
