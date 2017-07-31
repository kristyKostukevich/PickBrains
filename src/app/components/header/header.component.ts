import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http-service/http-service';
import { ShowMenuService } from 'app/components/header/show-menu.service';
import { Router } from '@angular/router';
import { LayoutService } from '../../layout/layout.service';

@Component({
  selector: 'global-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
})
export class GlobalHeaderComponent implements OnInit {
  public person = '';
  flag: boolean = false;

  constructor(
    private showMenu: ShowMenuService,
    private httpService: HttpService,
    private router: Router,
    private layout: LayoutService) {
    this.showMenu.getEmitter().subscribe(flag => {
      this.flag = flag;
      const data = JSON.parse(localStorage.getItem('user'));
      this.person = `${data.firstName} ${data.secondName}`;
    });
  }

  ngOnInit() {
    this.httpService
      .getData(`http://localhost:1337/api/user`)
      .subscribe((data) => {
        this.person = data.json().firstName + ' ' + data.json().secondName;
      });


  menuToggle() {
    this.showMenu.menuToggle();
  }

  logout() {
    this.httpService.postData({ } ,'http://localhost:1337/api/authentication/exit')
      .subscribe();
    this.router.navigateByUrl('/login');
  }
  onClick() {
    this.layout.notificationToggle();
  }
}
