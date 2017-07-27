import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'vacancy-detail',
  templateUrl: 'vacancy-detail.component.html',
  styleUrls: ['vacancy-detail.component.scss'],
})
export class VacancyDetailComponent implements OnInit, OnDestroy {
  menuItems: string[];
  id: number;
  type: string;

  private subscription: Subscription;

  constructor(private activateRoute: ActivatedRoute) {
    this.subscription = activateRoute.params.subscribe(params => this.id = params['id']);
    this.menuItems = ['General', 'Assigned candidates', 'Potential candidates', 'History'];
    this.type = 'vacancy';
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
