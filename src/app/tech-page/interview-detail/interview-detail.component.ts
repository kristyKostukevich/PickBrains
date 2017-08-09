import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from 'app/http-service/http-service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { InterviewDetailPage } from '../../classes/interview-detail-page';

@Component({
  selector: 'interview-detail',
  templateUrl: 'interview-detail.component.html',
  styleUrls: [
    './interview-detail.component.scss',
    '../interview-list/interview-list.component.scss',
  ],
})

export class InterviewDetailComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  model: InterviewDetailPage;
  interviewId: number;

  constructor(private httpService: HttpService,
              private currentActivatedRoute: ActivatedRoute) {
    this.subscription = currentActivatedRoute.params
      .subscribe(params => this.interviewId = params['id']);
    this.model = new InterviewDetailPage({});
  }

  ngOnInit() {
    this.httpService.getData(`http://192.168.43.31:1337/api/interviews/detailed-view?id=${this.interviewId}`)
      .subscribe(
        (res) => {
          this.model = new InterviewDetailPage(res.json());
        },
        (error) => {
          console.log(error);
        });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
