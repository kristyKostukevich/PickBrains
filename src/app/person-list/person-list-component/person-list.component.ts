import { Component, OnInit } from '@angular/core';

import { IPersonItem } from '../person-page-list-item/person-page-list-item.component';
import { HttpService } from './person-list-service';

@Component({
  selector: 'person-list',
  templateUrl: `./person-list.component.html`,
  styleUrls: ['person-list.component.scss'],
  providers: [HttpService],
})

export class PersonListComponent implements OnInit {
  // persons: IPersonItem[] = [
  //   {
  //     name:'Misha Pupkin',
  //     primarySkill:'C++',
  //     location:'Minsk',
  //     status:'Middle',
  //     date: new Date(2017,1,5),
  //     adress: 'exadel@gmail.com',
  //   },
  //   {
  //     name:'Vlad Zinchuk',
  //     primarySkill:'Java',
  //     location:'Brest',
  //     status:'Junior',
  //     date: new Date(2017,2,12),
  //     adress: 'zima_04@gmail.com',
  //   },
  //   {
  //     name:'Alexey Kolosov',
  //     primarySkill:'JavaScript',
  //     location:'Novopolotsk',
  //     status:'Middle',
  //     date: new Date(2017,5,15),
  //     adress: '1234@gmail.com',
  //   },
  //   {
  //     name:'Maksim Aderiha',
  //     primarySkill:'C++',
  //     location:'Gomel',
  //     status:'Junior',
  //     date: new Date(2017,2,5),
  //     adress: 'lol@gmail.com',
  //   },
  // ];

  persons: IPersonItem[];

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    // this.httpService.getData().subscribe((data: Response) => {
    //   this.persons = data.json();
    //   console.log(this.persons);
    // });
    this.httpService.getData().then(res => {
      this.persons = res.json();
      console.log(this.persons);
    });
  }
}
