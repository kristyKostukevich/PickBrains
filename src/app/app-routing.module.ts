import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonListComponent } from './main-page/person-list-component/person-list.component';

import 'hammerjs';
import { VacancyListComponent } from './main-page/vacancy-list-component/vacancy-list-component';
import { HistoryListComponent } from './main-page/history-list-component/history-list-component';
import { CandidateDetailComponent } from 'app/candidate-detail/candidate-detail.component';
import { GeneralComponent } from 'app/components/general/general.component';
import { MaxListComponent } from 'app/components/max-list/max-list.component';
import { VacancyDetailComponent } from 'app/vacancy-detail/vacancy-detail.component';

const candidateRoutes: Routes = [
  {
    path: 'general',
    component: GeneralComponent,
  },
  {
    path: 'feedbacks-from-tech',
    component: MaxListComponent,
  },
  {
    path: 'feedbacks-from-hrm',
    component: MaxListComponent,
  },
  {
    path: 'history',
    component: MaxListComponent,
  },
];

const vacancyRoutes: Routes = [
  {
    path: 'general',
    component: GeneralComponent,
  },
  {
    path: 'assigned-candidates',
    component: MaxListComponent,
  },
  {
    path: 'potential-candidates',
    component: MaxListComponent,
  },
  {
    path: 'history',
    component: MaxListComponent,
  },
];

const routes: Routes = [
  {
    path: '',
    redirectTo: 'person-page',
    pathMatch: 'full',
  },
  {
    path: 'person-page',
    component: PersonListComponent,
  },
  {
    path: 'vacancy-page',
    component: VacancyListComponent,
  },
  {
    path: 'history-page',
    component: HistoryListComponent,
  },
  {
    path: 'person-page/detail-candidate/:id',
    component: CandidateDetailComponent,
    children: candidateRoutes,
  },
  {
    path: 'vacancy-page/detail-vacancy/:id',
    component: VacancyDetailComponent,
    children: vacancyRoutes,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule {
}
