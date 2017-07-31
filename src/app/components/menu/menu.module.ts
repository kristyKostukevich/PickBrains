import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule } from '@angular/material';
import { MenuComponent } from './menu.component';
import { AppRoutingModule } from '../../app-routing.module';
import { ShowMenuService } from 'app/components/header/show-menu.service';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    AppRoutingModule,
    CommonModule,
    MdButtonModule,
    RouterModule,
  ],
  declarations: [MenuComponent],
  exports: [MenuComponent],
  providers: [ShowMenuService,
  ],
})
export class MenuModule {
}
