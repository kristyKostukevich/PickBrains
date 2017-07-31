import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonListComponent } from './main-page/person-list-component/person-list.component';
import 'hammerjs';
import { VacancyListComponent } from './main-page/vacancy-list-component/vacancy-list-component';
import { HistoryListComponent } from './main-page/history-list-component/history-list-component';
import { AuthorizationComponent } from './authorization/authorization.component';

import { VacancyDetailComponent } from './vacancy-detail/vacancy-detail.component';
import { CandidateDetailComponent } from './candidate-detail/candidate-detail.component';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { AddVacancyComponent } from './add-vacancy/add-vacancy.component';
import { HrmGuard } from './guards/hrm.guard';
import { TechGuard } from './guards/tech.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'person-page',
    pathMatch: 'full',
  },
  {
    path: 'person-page',
    canActivate: [TechGuard],
    component: PersonListComponent,
  },
  {
    path: 'vacancy-page',
    canActivate: [TechGuard],
    component: VacancyListComponent,
  },
  {
    path: 'history-page',
    canActivate: [HrmGuard],
    component: HistoryListComponent,
  },
  {
    path: 'person-page/detail-candidate/:id',
    canActivate: [TechGuard],
    component:CandidateDetailComponent,
},
  {
    path: 'vacancy-page/detail-vacancy/:id',
    canActivate: [TechGuard],
    component:VacancyDetailComponent,
  },
  {
    path: 'login',
    component: AuthorizationComponent,
  },
  {
    path: 'add-candidate',
    canActivate: [TechGuard],
    component: AddCandidateComponent,
  },
  {
    path: 'add-vacancy',
    canActivate: [TechGuard],
    component: AddVacancyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
