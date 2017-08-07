import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MdButtonModule } from '@angular/material';
import { InterviewComponent } from './interview.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MdButtonModule,
  ],
  declarations: [InterviewComponent],
  exports: [InterviewComponent],
  providers: [],
})
export class InterviewModule {
}
