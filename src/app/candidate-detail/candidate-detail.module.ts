import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'app/components/menu/menu.module';
import { AppRoutingModule } from 'app/app-routing.module';
import { CandidateDetailComponent } from 'app/candidate-detail/candidate-detail.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    MenuModule,
  ],
  exports: [
    CandidateDetailComponent
  ],
  declarations: [
    CandidateDetailComponent
  ],
})
export class CandidateDetailModule {
}
