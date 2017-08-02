import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http-service';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  user: Observable<User>;
  name: Observable<string>;

  constructor(private httpService: HttpService) {
    this.user = this.httpService.getData(`http://localhost:1337/api/user`)
      .map(data => data.json());
    this.name = this.user.map(data => data.firstName);
    // .subscribe((data) => {
    //   this.user = data.json();
    //   console.log(this.user);
    // });
  }

  // getUserType(): string {
  //   console.log('type');
  //   //return this.user.type;
  // }
  //
  // getUserName(): string {
  //   console.log('name');
  //   // return this.name;
  // }

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

