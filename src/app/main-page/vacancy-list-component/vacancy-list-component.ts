import { Component, OnInit } from '@angular/core';
import { CardList } from '../../classes/card-list';
import { VacancyCardItem } from '../../interfaces/vacancy-card-item';
import { HttpService } from './vacancy-list-component.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'vacancy-list',
  templateUrl: `./vacancy-list-component.html`,
  styleUrls: ['vacancy-list-component.scss'],
  providers: [HttpService],
})

export class VacancyListComponent implements OnInit {
  vacancies: VacancyCardItem [] = [];
  listItem: CardList;
  urlAdress: string;

  constructor(private httpService: HttpService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.httpService.getData({limit: 0}).then(res => {
      this.vacancies = res.json();
      this.listItem = new CardList(this.vacancies, 'vacancies');
      this.urlAdress = this.route.snapshot.url[0].path;
    });
  }
}
