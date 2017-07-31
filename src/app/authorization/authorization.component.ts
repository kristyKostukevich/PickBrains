import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http-service/http-service';
import { AuthorizationService } from './autorization.service';



@Component({
  selector: 'authorization',
  templateUrl: 'authorization.component.html',
  styleUrls: ['authorization.component.scss'],
})
export class AuthorizationComponent {
  error: string;
  login: InputModel = {
    placeholder: 'Login',
    value: '',
  };
  password: InputModel = {
    placeholder: 'Password',
    value: '',
  };

  private user: User;
  constructor(
    private httpService: HttpService,
    private router: Router,
    private authorization: AuthorizationService) {}

  submit() {
    const user: AuthorizationForm = {
      login: this.login.value,
      password: this.password.value,
    };
    this.httpService.postData(user, 'http://localhost:1337/api/authentication/login')
      .subscribe((data) => {
        this.httpService
            .getData(`http://localhost:1337/api/user`)
            .subscribe((data) => {
              this.user = data.json();
              const currUser = JSON.stringify(this.user);
              localStorage.setItem('user', currUser);
              this.authorization.showHeaderToggle();
              this.router.navigateByUrl('/person-page');
            });
      },
        (error) => {
          this.error = 'incorrect data';
          this.login.value = '';
          this.password.value = '';
        });



  }
  clear() {
    this.error = '';
  }
}
export class InputModel {
  placeholder: string;
  value: string;
}
export class User{

  type:string;
  firstName: string;
  secondName: string;
}

export class AuthorizationForm {
  login: string;
  password: string;
}
