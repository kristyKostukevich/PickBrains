import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonListComponent } from './main-page/person-list-component/person-list.component';
import { TempComponent } from './Temp/temp.component';

import 'hammerjs';
import { VacancyListComponent } from './main-page/vacancy-list-component/vacancy-list-component';
import { HistoryListComponent } from './main-page/history-list-component/history-list-component';
import { AuthorizationComponent } from './authorization/authorization.component';

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
    component:TempComponent
},
  {
    path: 'vacancy-page/detail-vacancy/:id',
    component:TempComponent
  },
  {
    path: 'login',
    component: AuthorizationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule {
}
