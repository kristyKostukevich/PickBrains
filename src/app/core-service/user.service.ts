import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http-service';

@Injectable()
export class UserService {
  user: User;
  constructor(private httpService: HttpService) {
    this.httpService.getData(`http://localhost:1337/api/user`)
      .subscribe((data) => {
        this.user = data.json();
        console.log(this.user);
      });
  }
  getUserType(): string {
    console.log('type');
    return this.user.type;
  }
  getUserName(): string {
    console.log('name');
    return `${this.user.firstName} ${this.user.secondName}`;
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

