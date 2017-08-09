import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../../../http-service/http-service';
import { CheckBoxModel } from '../../../interfaces/check-box';
import { DataPickerFilterModel } from '../../../interfaces/data-picker-filter';
import { InputFilterModel } from '../../../interfaces/input-filter';


@Component({
  selector: 'filter-person',
  templateUrl: 'filter-person.component.html',
  styleUrls: ['filter-person.component.scss'],
  providers: [HttpService],
})
export class FilterPersonComponent implements OnInit {

  arrayOfCities: any[] = [];
  sendArrayOfCities: CheckBoxModel[] = [];
  arrayOfSkills: any[] = [];
  sendArrayOfSkills: CheckBoxModel[] = [];
  arrayOfLanguages: any[] = [];
  sendArrayOfLanguages: CheckBoxModel[] = [];
  arrayOfStatuses: any[] = [];
  sendArrayOfStatuses: CheckBoxModel[] = [];
  sendDate: DataPickerFilterModel = new DataPickerFilterModel(new Date());
  sendSalary: InputFilterModel = new InputFilterModel(0,0);
  @Output() send = new EventEmitter<any>();


  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.getData('http://192.168.43.135:1337/api/meta-data/locations').subscribe((res) => {
      this.arrayOfCities = res.json();
      var count = 0;
      for(var item of this.arrayOfCities){
        this.sendArrayOfCities[count] = new CheckBoxModel(this.arrayOfCities[count].city,this.arrayOfCities[count].id);
          count++;
      }
    });
    this.httpService.getData('http://192.168.43.135:1337/api/meta-data/skills').subscribe((res) => {
      this.arrayOfSkills = res.json();
      var count = 0;
      for(var item of this.arrayOfSkills){
        this.sendArrayOfSkills[count] = new CheckBoxModel(this.arrayOfSkills[count].skillName,this.arrayOfSkills[count].id);
        count++;
      }
    });
    this.httpService.getData('http://192.168.43.135:1337/api/meta-data/english-levels').subscribe((res) => {
      this.arrayOfLanguages = res.json();
      var count = 0;
      for(var item of this.arrayOfLanguages){
        this.sendArrayOfLanguages[count] = new CheckBoxModel(this.arrayOfLanguages[count].lvl,this.arrayOfLanguages[count].id);
        count++;
      }
    });
    this.httpService.getData('http://192.168.43.135:1337/api/meta-data/candidate-statuses').subscribe((res) => {
      this.arrayOfStatuses = res.json();
      var count = 0;
      for(var item of this.arrayOfStatuses){
        this.sendArrayOfStatuses[count] = new CheckBoxModel(this.arrayOfStatuses[count].status,this.arrayOfStatuses[count].id);
        count++;
      }
    });
  }

  onChanged(increased,group){
    this.send.emit({id: increased,group : group});
  }
}

