import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'vacancy-detail',
  templateUrl: 'vacancy-detail.component.html',
  styleUrls: ['vacancy-detail.component.scss'],
})
export class VacancyDetailComponent implements OnInit, OnDestroy {
  menuItems: any[];
  id: number;
  type: string;

  private subscription: Subscription;

  constructor(private activateRoute: ActivatedRoute) {
    this.subscription = activateRoute.params.subscribe(params => this.id = params['id']);
    this.type = 'vacancy';
    this.menuItems = [
      {
        item: 'General',
        link: 'general',
      },
      {
        item: 'Assigned candidates',
        link: 'assigned-candidates',
      },
      {
        item: 'Potential candidates',
        link: 'potential-candidates',
      },
      {
        item: 'Assign candidate',
        link: 'assign-candidate',
      },
      {
        item: 'History',
        link: 'history',
      },
    ];
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
