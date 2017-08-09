import { Component, OnInit, OnDestroy } from '@angular/core';
import { DetailTechFeedbackPage } from 'app/classes/detail-tech-feedback-page';
import { HttpService } from 'app/http-service/http-service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'add-tech-feedback',
  templateUrl: 'detail-tech-feedback.component.html',
  styleUrls: ['../../components/general-view/general-view.component.scss'],
})

export class DetailTechFeedbackComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  model: DetailTechFeedbackPage;
  feedbackId: number;

  constructor(private httpService: HttpService,
              private currentActivatedRoute: ActivatedRoute) {
    this.subscription = currentActivatedRoute.params
      .subscribe(params => this.feedbackId = params['id']);
    this.model = new DetailTechFeedbackPage({});
  }

  ngOnInit() {
    this.httpService.getData(`http://192.168.43.31:1337/api/candidate/ts-feedbacks/detailed-view?id=${this.feedbackId}`)
      .subscribe((res) => {
        this.getFeedbackData(res.json());
      });
  }

  getFeedbackData(param) {
    this.model = new DetailTechFeedbackPage(param);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
