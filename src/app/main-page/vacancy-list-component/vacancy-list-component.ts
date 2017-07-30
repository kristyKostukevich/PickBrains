import { Component, OnInit } from '@angular/core';
import { CardList } from '../../classes/card-list';
import { VacancyCardItem } from '../../interfaces/vacancy-card-item';
import { HttpService } from '../../http-service/http-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'vacancy-list',
  templateUrl: 'vacancy-list-component.html',
  styleUrls: ['../person-list-component/person-list.component.scss'],
  providers: [HttpService],
})

export class VacancyListComponent implements OnInit {
  vacancies: VacancyCardItem [] = [];
  urlAdress: string;
  listItem: CardList;

  constructor(private httpService: HttpService,private route:ActivatedRoute) {
  }


  ngOnInit() {
    this.httpService.postData({limit: 0},'http://localhost:1337/api/vacancies').subscribe((res) => {
      this.vacancies = res.json();
      this.listItem = new CardList(this.vacancies,'vacancies');
      this.urlAdress = this.route.snapshot.url[0].path;
    });

  }
}
