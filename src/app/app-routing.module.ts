import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonListComponent } from './main-page/person-list-component/person-list.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { VacancyDetailComponent } from './vacancy-detail/vacancy-detail.component';
import { CandidateDetailComponent } from './candidate-detail/candidate-detail.component';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { AddVacancyComponent } from './add-vacancy/add-vacancy.component';

import 'hammerjs';
import { VacancyListComponent } from './main-page/vacancy-list-component/vacancy-list-component';
import { HistoryListComponent } from './main-page/history-list-component/history-list-component';
import { MaxListComponent } from 'app/components/max-list/max-list.component';
import { GeneralViewComponent } from 'app/components/general-view/general-view.component';

const candidateRoutes: Routes = [
  {
    path: '',
    redirectTo: 'general',
    pathMatch: 'full',
  },
  {
    path: 'general',
    component: GeneralViewComponent,
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
    path: '',
    redirectTo: 'general',
    pathMatch: 'full',
  },
  {
    path: 'general',
    component: GeneralViewComponent,
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
  {
    path: 'login',
    component: AuthorizationComponent,
  },
  {
    path: 'add-candidate',
    component: AddCandidateComponent,
  },
  {
    path: 'add-vacancy',
    component: AddVacancyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule {
}
