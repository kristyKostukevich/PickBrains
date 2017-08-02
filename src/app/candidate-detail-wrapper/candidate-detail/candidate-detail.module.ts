import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from '../../components/menu/menu.module';
import { AppRoutingModule } from '../../app-routing.module';
import { CandidateDetailComponent } from './candidate-detail.component';

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
