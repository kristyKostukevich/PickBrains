import { Component, OnInit } from '@angular/core';
import { CardList } from '../../classes/card-list';
import { CandidateCardItem } from '../../interfaces/candidate-card-item';
import { HttpService } from '../../http-service/http-service';
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
    this.httpService.postData({ skip: 0 }, 'http://localhost:1337/api/candidates')
      .subscribe((res) => {
        this.persons = res.json();
        this.listItem = new CardList(this.persons,'candidates');
        this.urlAdress = this.route.snapshot.url[0].path;
      });

  }
}
