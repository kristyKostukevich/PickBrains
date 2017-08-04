import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http-service';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  user: Observable<User>;
  name: Observable<string>;
  type: Observable<string>;
  constructor(private httpService: HttpService) {
    this.user = this.httpService.getData(`http://localhost:1337/api/user`)
      .map(data => data.json());
    this.name = this.user.map(data => `${data.firstName} ${data.secondName}`).publishReplay(1).refCount();
    this.type = this.user.map(data => data.type).publishReplay(1).refCount();
    console.log('userservice');
  }

  reset() {
    if (this.user) {
      this.user = null;
    }
  }
}
export class User {
  type: string;
  firstName: string;
  secondName: string;
}

