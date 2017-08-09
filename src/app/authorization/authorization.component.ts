import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http-service/http-service';
import { UserService } from '../core-service/user.service';


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
    type: 'text',
  };
  password: InputModel = {
    placeholder: 'Password',
    value: '',
    type: 'password',
  };

  constructor(private httpService: HttpService,
              private router: Router,
              private userService: UserService) {
  }

  enterClick(event) {
    if (event.keyCode === 13)
      this.submit();
  }

  submit() {
    const user: AuthorizationForm = {
      login: this.login.value,
      password: this.password.value,
    };
    this.httpService.postData(user, 'http://192.168.43.31:1337/api/authentication/login')
      .subscribe((data) => {
        this.router.navigateByUrl('');
        this.userService.init();
      },
        (error) => {
          this.error = 'incorrect data';
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
  type: string;
}

export class AuthorizationForm {
  login: string;
  password: string;
}
