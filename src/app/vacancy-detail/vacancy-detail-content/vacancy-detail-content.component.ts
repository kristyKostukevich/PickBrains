import { Component } from '@angular/core';

@Component({
  selector: 'vacancy-detail-content',
  templateUrl: 'vacancy-detail-content.component.html',
  styleUrls: ['vacancy-detail-content.component.scss'],
})
export class VacancyDetailContentComponent {

  projectName: string[] = ['', 'Project Name'];

  locations: string[] = ['lco1', 'loc2', 'loc3'];
  placeholder: string = 'Location';

  requestDate: string[] = ['', 'Request Date'];

  Description: string[] = ['', 'Description'];

}
