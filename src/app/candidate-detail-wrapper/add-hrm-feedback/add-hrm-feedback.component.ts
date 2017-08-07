import { Component, OnInit, OnDestroy } from '@angular/core';
import { AddHrmFeedbackPage } from 'app/classes/add-hrm-feedback-page';
import { UserService } from 'app/core-service/user.service';
import { HttpService } from 'app/http-service/http-service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'add-hrm-feedback',
  templateUrl: 'add-hrm-feedback.component.html',
  styleUrls: [
    '../../components/general-view/general-view.component.scss',
    './add-hrm-feedback.component.scss',
  ],
})

export class AddHrmFeedbackComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  englishMap: Map<string, number>;
  model: AddHrmFeedbackPage;
  interviewId: number;

  constructor(private userService: UserService,
              private httpService: HttpService,
              private router: Router,
              private currentActivatedRoute: ActivatedRoute) {
    this.subscription = currentActivatedRoute.params
      .subscribe(params => this.interviewId = params['id']);
    console.log(this.interviewId);

    this.englishMap = new Map();
    this.model = new AddHrmFeedbackPage([]);
  }

  ngOnInit() {
    this.httpService.getData('http://192.168.43.8:1488/api/meta-data/english-levels')
      .subscribe((res) => {
        this.getEnglishData(res.json());
        this.model = new AddHrmFeedbackPage(Array.from(this.englishMap.keys()));
        this.model.setName(this.userService.realName);
      });
  }

  getEnglishData(param) {
    param.forEach(item => this.englishMap.set(item.lvl, item.id));
  }

  submit() {
    this.httpService.postData({
      changeReason: this.model.reason.value,
      readyToWork: this.model.readinessToWork.value,
      readyToTravel: this.model.readinessToBusinessTrip.value,
      motivation: this.model.motivation.value,
      englishLvl: this.englishMap.get(this.model.englishLevel.value),
      salaryWish: this.model.salary.value,
      other: this.model.comment.value,
      interviewId: this.interviewId,
    }, 'http://192.168.43.8:1488/api/candidate/hrm-feedbacks/new').subscribe(
      (res) => {
        if (res.status === 201) {
          this.router
            .navigate(['../../../feedbacks-from-hrm'], {relativeTo: this.currentActivatedRoute});
        }
        console.log(res.status);
      },
      (error) => {
        console.log(error);
      },
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
