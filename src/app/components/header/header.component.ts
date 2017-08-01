import { Component} from '@angular/core';
import { HttpService } from '../../http-service/http-service';
import { ShowMenuService } from 'app/components/header/show-menu.service';
import { Router } from '@angular/router';
import { LayoutService } from '../../layout/layout.service';
import { AuthorizationService } from '../../authorization/autorization.service';

@Component({
  selector: 'global-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
})
export class GlobalHeaderComponent{
  public person = '';
  flag: boolean = false;

  constructor(
    private showMenu: ShowMenuService,
    private httpService: HttpService,
    private router: Router,
    private layout: LayoutService,
    private authorization: AuthorizationService) {
    this.showMenu.getEmitter().subscribe(flag => {
      this.flag = flag;
    });
  }

  ngOnInit() {
    const data = JSON.parse(localStorage.getItem('user'));
    this.person = `${data.firstName} ${data.secondName}`;
  }
  menuToggle() {
    this.showMenu.menuToggle();
  }

  logout() {
    this.httpService.postData({ } ,'http://localhost:1337/api/authentication/exit')
      .subscribe();
    this.router.navigateByUrl('/login');
    localStorage.clear();
    this.authorization.closeHeaderToggle();
    this.layout.logout();

  }
  onClick() {
    this.layout.notificationToggle();
  }
  mainPage() {
    this.router.navigateByUrl('/person-page');
  }
}
