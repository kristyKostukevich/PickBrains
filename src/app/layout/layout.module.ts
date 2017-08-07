import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout.component';
import {} from '@angular/http';
import { GlobalHeaderModule } from '../components/header/header.module';
import { NotificationModule } from '../notification/notification.module';
import { AppRoutingModule } from '../app-routing.module';
import { LayoutService } from './layout.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserService } from '../core-service/user.service';
import { SpinnerService } from '../core-service/spinner.servise';
import { MdProgressSpinnerModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GlobalHeaderModule,
    NotificationModule,
    AppRoutingModule,
    FlexLayoutModule,
    MdProgressSpinnerModule,

  ],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
  providers: [
    LayoutService,
    UserService,
    SpinnerService,
  ],
})
export class LayoutModule {
}
