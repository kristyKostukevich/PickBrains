import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotificationComponent } from './notification.component';
import { MdTableModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdTableModule,
    CdkTableModule,
  ],
  declarations: [NotificationComponent],
  exports: [NotificationComponent],
})
export class NotificationModule {
}
