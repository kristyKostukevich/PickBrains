import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from 'app/http-service/http-service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DetailHrmFeedbackPage } from 'app/classes/detail-hrm-feedback-page';

@Component({
  selector: 'add-hrm-feedback',
  templateUrl: 'detail-hrm-feedback.component.html',
  styleUrls: ['../../components/general-view/general-view.component.scss'],
})

export class DetailHrmFeedbackComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  model: DetailHrmFeedbackPage;
  feedbackId: number;

  constructor(private httpService: HttpService,
              private currentActivatedRoute: ActivatedRoute) {
    this.subscription = currentActivatedRoute.params
      .subscribe(params => this.feedbackId = params['id']);
    this.model = new DetailHrmFeedbackPage({});
  }

  ngOnInit() {
    this.httpService.getData(`http://192.168.43.31:1337/api/candidate/hrm-feedbacks/detailed-view?id=${this.feedbackId}`)
      .subscribe(
        (res) => {
          this.getFeedbackData(res.json());
        },
        (error) => {
          console.log(error);
        });
  }

  getFeedbackData(param) {
    this.model = new DetailHrmFeedbackPage(param);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
