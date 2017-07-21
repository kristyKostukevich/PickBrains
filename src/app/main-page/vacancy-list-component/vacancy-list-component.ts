import { Component, OnInit } from '@angular/core';
import { CardList } from '../../classes/card-list';
import { VacancyCardItem } from '../../interfaces/vacancy-card-item';
import { HttpService } from './vacancy-list-component.service';

@Component({
  selector: 'vacancy-list',
  templateUrl: `./vacancy-list-component.html`,
  styleUrls: ['vacancy-list-component.scss'],
  providers: [HttpService],
})

export class VacancyListComponent implements OnInit {
  vacancies: VacancyCardItem [] = [];
  listItem: CardList;

  constructor(private httpService: HttpService) {
  }


  ngOnInit() {
  this.httpService.getData().then(res => {
    this.vacancies = res.json();
    this.listItem = new CardList(this.vacancies,'vacancies');
  });
}
}
