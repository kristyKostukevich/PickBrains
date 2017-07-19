import { Component, OnInit } from '@angular/core';
import { HttpService } from './person-list-service';
import { CardList } from '../../classes/card-list';
import { CandidateCardItem } from '../../interfaces/candidate-card-item';

@Component({
  selector: 'person-list',
  templateUrl: `./person-list.component.html`,
  styleUrls: ['person-list.component.scss'],
  providers: [HttpService],
})

export class PersonListComponent implements OnInit {
  persons: CandidateCardItem [] = [
  ];

  listItem: CardList;

  constructor(private httpService: HttpService) {
  }


  ngOnInit() {
    // this.httpService.getData().subscribe((data: Response) => {
    //   this.persons = data.json();
    //   console.log(this.persons);
    // });
    this.httpService.getData({
      skip: 0
    }).then(res => {
      this.persons = res.json();
      this.listItem = new CardList(this.persons,'candidates');
    });

  }
}
