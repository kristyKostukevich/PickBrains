import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'candidate-detail',
  templateUrl: 'candidate-detail.component.html',
  styleUrls: ['candidate-detail.component.scss'],
})

export class CandidateDetailComponent implements OnInit, OnDestroy {
  menuItems: any[];
  id: number;
  type: string;

  private subscription: Subscription;

  constructor(private activateRoute: ActivatedRoute) {
    this.subscription = activateRoute.params.subscribe(params => this.id = params['id']);
    this.type = 'candidate';
    this.menuItems = [
      {
        item: 'General',
        link: 'general',
      },
      {
        item: 'Feedbacks From Tech',
        link: 'feedbacks-from-tech',
      },
      {
        item: 'Feedbacks From HRm',
        link: 'feedbacks-from-hrm',
      },
      {
        item: 'Interviews',
        link: 'interviews',
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
