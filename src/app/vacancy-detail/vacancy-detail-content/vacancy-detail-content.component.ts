import { Component } from '@angular/core';

@Component({
  selector: 'vacancy-detail-content',
  templateUrl: 'vacancy-detail-content.component.html',
  styleUrls: ['vacancy-detail-content.component.scss'],
})
export class VacancyDetailContentComponent {

  projectName: string[] = ['', 'Project Name'];

  requestDate: string[] = ['', 'Request Date'];

  Description: string[] = ['', 'Description'];

}
