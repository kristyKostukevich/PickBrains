import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GlobalHeaderModule } from './components/global-header/header.module';
import { VacanciesDetailModule } from './vacancy-detail/vacancy-detail-wrapper/vacancy-detail-wrapper.module';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    GlobalHeaderModule,
    VacanciesDetailModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
