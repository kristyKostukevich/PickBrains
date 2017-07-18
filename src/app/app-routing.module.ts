import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonListComponent } from './person-list/person-list-component/person-list.component';
import { TempComponent } from './Temp/temp.component';


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
    component: PersonListComponent,
  },
  {
    path: 'history',
    component: PersonListComponent,
  },
  {
    path: 'detail-candidate',
    component:TempComponent
},
  {
    path: 'detail-vacancy',
    component:TempComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
