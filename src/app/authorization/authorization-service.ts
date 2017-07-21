import 'rxjs/add/observable/throw';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { AuthorizationForm } from './authorization.component';

@Injectable()
export class HttpService{

  constructor(private http: Http) { }


  postData(obj: AuthorizationForm) {
    const body = JSON.stringify(obj);
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });

    return this.http.post('http://localhost:1337/api/authentication/login', body, { headers })
      .catch((error:any) => {return Observable.throw(error);});
  }
}
