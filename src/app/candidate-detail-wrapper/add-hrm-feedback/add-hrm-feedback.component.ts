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
  model: AddHrmFeedbackPage;
  englishOptions: any[];
  interviewId: number;

  constructor(private userService: UserService,
              private httpService: HttpService,
              private router: Router,
              private currentActivatedRoute: ActivatedRoute) {
    this.subscription = currentActivatedRoute.params
      .subscribe(params => this.interviewId = params['id']);
    console.log(this.interviewId);
    this.englishOptions = [];
    this.model = new AddHrmFeedbackPage({}, []);
  }

  ngOnInit() {
    this.httpService.getData('http://192.168.43.8:1488/api/meta-data/english-levels')
      .subscribe((res) => {
        this.englishOptions = res.json();
        const temp = this.englishOptions.map((item) => {
          return item.lvl;
        });
        this.model = new AddHrmFeedbackPage({}, temp);
        this.model.setName(this.userService.realName);
      });
  }

  submit() {
    const currEnglishLvl = this.englishOptions.find((item) => {
      return item.lvl === this.model.englishLevel.value;
    });

    this.httpService.postData({
      changeReason: this.model.reason.value,
      readyToWork: this.model.readinessToWork.value,
      readyToTravel: this.model.readinessToBusinessTrip.value,
      motivation: this.model.motivation.value,
      englishLvl: currEnglishLvl.id,
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
