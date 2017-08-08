import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http-service';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  user: Observable<User>;
  name: Observable<string>;
  type: Observable<string>;
  realName: string;

  constructor(private httpService: HttpService) {
    this.init();
  }

  init() {
    this.user = this.httpService.getData(`http://192.168.43.31:1337/api/user`)
      .map(data => data.json());
    this.name = this.user.map(data => `${data.firstName} ${data.secondName}`)
      .publishReplay(1).refCount();
    this.type = this.user.map(data => data.type).publishReplay(1).refCount();

    this.name.subscribe(data => this.realName = data);
  }

  reset() {
    this.user = Observable.empty();
  }

}
export class User {
  type: string;
  firstName: string;
  secondName: string;
}

