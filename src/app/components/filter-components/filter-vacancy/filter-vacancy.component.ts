import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../../../http-service/http-service';
import { CheckBoxModel } from '../../../interfaces/check-box';


@Component({
  selector: 'filter-vacancy',
  templateUrl: 'filter-vacancy.component.html',
  styleUrls: ['filter-vacancy.component.scss'],
  providers: [HttpService],
})
export class FilterVacancyComponent implements OnInit {

  arrayOfCities: any[] = [];
  sendArrayOfCities: CheckBoxModel[] = [];
  arrayOfSkills: any[] = [];
  sendArrayOfSkills: CheckBoxModel[] = [];
  @Output() send = new EventEmitter<any>();

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.getData('http://192.168.43.31:1337/api/meta-data/locations').subscribe((res) => {
      this.arrayOfCities = res.json();
      var count = 0;
      for(var item of this.arrayOfCities){
        this.sendArrayOfCities[count] = new CheckBoxModel(this.arrayOfCities[count].city,this.arrayOfCities[count].id);
        count++;
      }
    });
    this.httpService.getData('http://192.168.43.31:1337/api/meta-data/skills').subscribe((res) => {
      this.arrayOfSkills = res.json();
      var count = 0;
      for(var item of this.arrayOfSkills){
        this.sendArrayOfSkills[count] = new CheckBoxModel(this.arrayOfSkills[count].skillName,this.arrayOfSkills[count].id);
        count++;
      }
    });
  }
  onChanged(increased,group){
    this.send.emit({id: increased,group : group});
  }
}
