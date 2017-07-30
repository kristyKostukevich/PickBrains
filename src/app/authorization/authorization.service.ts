import { Injectable, EventEmitter } from '@angular/core';
import { HttpService } from '../http-service/http-service';

@Injectable()
export class AuthorizationService {
  authorization: EventEmitter<User> = new EventEmitter<User>();
  private user: User;

  constructor(private httpService: HttpService) {}

  authorizationToggle() {
    this.httpService
        .getData(`http://localhost:1337/api/user`)
        .subscribe((data) => {
          this.user = data.json();
          this.authorization.emit(this.user);
        });
  }

  getEmitter() {
    return this.authorization;
  }

}
export class User{

  type:string;
  firstName: string;
  secondName: string;
}
