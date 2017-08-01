import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout.compunent';
import {  } from '@angular/http';
import { GlobalHeaderModule } from '../components/header/header.module';
import { NotificationModule } from '../notification/notification.module';
import { AppRoutingModule } from '../app-routing.module';
import { LayoutService } from './layout.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthorizationService } from '../authorization/autorization.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GlobalHeaderModule,
    NotificationModule,
    AppRoutingModule,
    FlexLayoutModule,

  ],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
  providers: [
    LayoutService,
    AuthorizationService],
})
export class LayoutModule {
}
