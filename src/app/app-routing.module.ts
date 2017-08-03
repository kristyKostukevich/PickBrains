import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonListComponent } from './main-page/person-list-component/person-list.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { VacancyDetailComponent } from './vacancy-detail/vacancy-detail.component';
import { CandidateDetailComponent } from './candidate-detail/candidate-detail.component';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { AddVacancyComponent } from './add-vacancy/add-vacancy.component';
import { HrmGuard } from './guards/hrm.guard';
import { TechGuard } from './guards/tech.guard';

import 'hammerjs';
import { VacancyListComponent } from './main-page/vacancy-list-component/vacancy-list-component';
import { HistoryListComponent } from './main-page/history-list-component/history-list-component';
import { MaxListComponent } from 'app/components/max-list/max-list.component';
import { GeneralViewComponent } from 'app/components/general-view/general-view.component';
import { LayoutComponent } from './layout/layout.compunent';
import { AssignCandidateComponent } from 'app/vacancy-detail-wrapper/assign-candidate/assign-candidate.component';

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
    path: 'interviews',
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
    path: 'assign-candidate',
    component: AssignCandidateComponent,
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
    path: 'detail-candidate/:id',
    component: CandidateDetailComponent,
    children: candidateRoutes,
  },
  {
    path: 'detail-vacancy/:id',
    component: VacancyDetailComponent,
    children: vacancyRoutes,
  },

  {
    path: 'add-candidate',
    component: AddCandidateComponent,
  },
  {
    path: 'add-vacancy',
    canActivate: [TechGuard],
    component: AddVacancyComponent,
  },
];

];
const globalRoutes: Routes = [
  {
    path: 'login',
    component: AuthorizationComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: routes,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(globalRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
