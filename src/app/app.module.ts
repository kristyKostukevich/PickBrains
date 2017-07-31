import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalHeaderModule } from './components/header/header.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-accordion';
import { PersonPageModule } from './main-page/person-list-component/person-list.module';
import { HttpModule } from '@angular/http';
import { TempModule } from './Temp/temp.module';
import { FilterPersonModule } from './components/filter-components/filter-person/filter-person.module';
import { VacancyPageModule } from './main-page/vacancy-list-component/vacancy-list-component.module';
import { AuthorizationModule } from './authorization/authorization.module';
import { HistoryPageModule } from './main-page/history-list-component/history-list-component.module';
import { AddCandidateModule } from './add-candidate/add-candidate.module';
import { AddVacancyModule } from './add-vacancy/add-vacancy.module';
import { TechGuard } from './guards/tech.guard';
import { HrmGuard } from './guards/hrm.guard';

import { VacancyDetailModule } from './vacancy-detail/vacancy-detail.module';
import { CandidateDetailModule } from 'app/candidate-detail/candidate-detail.module';
import { MaxListModule } from 'app/components/max-list/max-list.module';
import { GeneralModule } from 'app/components/general/general.module';
import { GeneralViewModule } from 'app/components/general-view/general-view.module';
import { MenuService } from 'app/components/menu/menu.service';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    GlobalHeaderModule,
    PersonPageModule,
    AccordionModule,
    HttpModule,
    TempModule,
    FilterPersonModule,
    VacancyPageModule,
    HistoryPageModule,
    VacancyDetailModule,
    CandidateDetailModule,
    AuthorizationModule,
    AddCandidateModule,
    AddVacancyModule,
    GeneralModule,
    GeneralViewModule,
    MaxListModule,
    LayoutModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    TechGuard,
    HrmGuard,
    MenuService],
  bootstrap: [AppComponent],
})
export class AppModule { }
