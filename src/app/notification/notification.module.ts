import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotificationComponent } from './notification.component';
import { MdTableModule, MdButtonModule, MdIconModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdTableModule,
    CdkTableModule,
    RouterModule,
    MdButtonModule,
    MdIconModule,
  ],
  declarations: [NotificationComponent],
  exports: [NotificationComponent],
})
export class NotificationModule {
}
