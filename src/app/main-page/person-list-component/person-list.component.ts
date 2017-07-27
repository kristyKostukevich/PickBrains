import { Component, OnInit } from '@angular/core';
import { HttpService } from './person-list-service';
import { CardList } from '../../classes/card-list';
import { CandidateCardItem } from '../../interfaces/candidate-card-item';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'person-list',
  templateUrl: `./person-list.component.html`,
  styleUrls: ['person-list.component.scss'],
  providers: [HttpService],
})

export class PersonListComponent implements OnInit {
  persons: CandidateCardItem [] = [];
  urlAdress: string;
  listItem: CardList;

  constructor(private httpService: HttpService,private route:ActivatedRoute) {
  }


  ngOnInit() {
    this.httpService.getData({
      skip: 0
    }).then(res => {
      this.persons = res.json();
      this.listItem = new CardList(this.persons,'candidates');
      this.urlAdress = this.route.snapshot.url[0].path;
    });

  }
}
