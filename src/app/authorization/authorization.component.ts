import { Component } from '@angular/core';
import { HttpService } from './authorization-service';
import { Router } from '@angular/router';


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

  constructor(private httpService: HttpService, private router: Router) {
  }

  submit() {
    const user: AuthorizationForm = {
      login: this.login.value,
      password: this.password.value,
    };
    this.httpService.postData(user)
      .subscribe((data) => {
        this.router.navigateByUrl('/person-page');
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
export class AuthorizationForm {
  login: string;
  password: string;
}
