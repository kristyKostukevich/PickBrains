import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MdButtonModule } from '@angular/material';
import { InterviewComponent } from './interview.component';
import { InterviewService } from './interview.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MdButtonModule,
  ],
  declarations: [InterviewComponent],
  exports: [InterviewComponent],
  providers: [InterviewService],
})
export class InterviewModule {
}
