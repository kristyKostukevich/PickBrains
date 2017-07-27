import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http-service/http-service';
import { ShowMenuService } from 'app/components/header/show-menu.service';

@Component({
  selector: 'global-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
  providers: [HttpService],
})
export class GlobalHeaderComponent implements OnInit {
  public person = 'User';
  flag: boolean = false;

  constructor(private showMenu: ShowMenuService, private httpService: HttpService) {
    this.showMenu.getEmitter().subscribe(flag => {
      this.flag = flag;
    });
  }

  ngOnInit() {
    this.httpService
      .getData(`http://localhost:1337/api/user`)
      .subscribe((data) => {
        this.person = data.json().first_name+' '+data.json().second_name;
      });
  }

  menuToggle() {
    this.showMenu.menuToggle();
  }
}
