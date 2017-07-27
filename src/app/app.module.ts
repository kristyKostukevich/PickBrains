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
import { VacanciesDetailModule } from './vacancy-detail/vacancy-detail.module';
import { AddCandidateModule } from './add-candidate/add-candidate.module';
import { AddVacancyModule } from './add-vacancy/add-vacancy.module';
import { VacancyDetailModule } from './vacancy-detail/vacancy-detail.module';
import { CandidateDetailModule } from 'app/candidate-detail/candidate-detail.module';
import { GeneralModule } from 'app/components/general/general.module';
import { MaxListModule } from 'app/components/max-list/max-list.module';

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
    VacanciesDetailModule,
    CandidateDetailModule,
    AuthorizationModule,
    AddCandidateModule,
    AddVacancyModule,
    GeneralModule,
    MaxListModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
