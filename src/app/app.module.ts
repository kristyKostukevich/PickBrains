import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalHeaderModule } from './components/global-header/header.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MaterialModule } from '@angular/material';
import { PersonPageModule } from './person-list/person-list-component/person-list.module';
import { VacanciesDetailModule } from "./vacancy-detail/vacancy-detail-wrapper/vacancy-detail-wrapper.module";
import { VacancyDetailMenuModule } from './vacancy-detail/vacancy-detail-menu/vacancy-detail-menu.module';


@NgModule({
  imports: [
    MaterialModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    GlobalHeaderModule,
    VacanciesDetailModule,
    PersonPageModule,
    VacancyDetailMenuModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
