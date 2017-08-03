import { Component, OnInit } from '@angular/core';
import { AddHrmFeedbackPage } from 'app/classes/add-hrm-feedback-page';

@Component({
  selector: 'add-hrm-feedback',
  templateUrl: 'add-hrm-feedback.component.html',
  styleUrls: [
    '../../components/general-view/general-view.component.scss',
    './add-hrm-feedback.component.scss',
  ],
})

export class AddHrmFeedbackComponent implements OnInit {
  model: AddHrmFeedbackPage;

  constructor() {
    this.model = new AddHrmFeedbackPage({});
  }

  ngOnInit() {

  }
}
