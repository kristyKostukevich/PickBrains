import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'candidate-detail',
  templateUrl: 'candidate-detail.component.html',
  styleUrls: ['candidate-detail.component.scss'],
})

export class CandidateDetailComponent implements OnInit, OnDestroy {
  menuItems: string[];
  id: number;
  type: string;

  private subscription: Subscription;

  constructor(private activateRoute: ActivatedRoute) {
    this.subscription = activateRoute.params.subscribe(params => this.id = params['id']);
    this.menuItems = ['General', 'Feedbacks From Tech', 'Feedbacks From HRm', 'History'];
    this.type = 'candidate';
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
