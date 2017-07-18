import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalHeaderModule } from './components/header/header.module';
import { VacanciesDetailModule } from './vacancy-detail/vacancy-detail-wrapper/vacancy-detail-wrapper.module';
import { AppComponent } from './app.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    GlobalHeaderModule,
    VacanciesDetailModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {

}
