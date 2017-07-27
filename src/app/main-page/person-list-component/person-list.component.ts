import { Component, OnInit } from '@angular/core';
import { CardList } from '../../classes/card-list';
import { CandidateCardItem } from '../../interfaces/candidate-card-item';
import { HttpService } from '../../http-service/http-service';

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
    this.httpService.putData({ skip: 0 }, 'http://localhost:1337/api/candidates')
      .subscribe((res) => {
        this.persons = res.json();
        this.listItem = new CardList(this.persons,'candidates');
      });

  }
}
