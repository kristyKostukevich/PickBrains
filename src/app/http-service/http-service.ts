

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpService{

  constructor(private http: Http, private router: Router) { }

  postData(obj: any, url: string) {
    const body = JSON.stringify(obj);
    const options = this.preparseOptions();
    return this.http.post(url, body, options)
      .catch((error:any) => {return Observable.throw(error);});
  }
  getData(url: string) {
    const options = this.preparseOptions();
    return this.http.get(url, options)
      .catch((error:any) => {
        if (error.status === 401)
          this.router.navigateByUrl('/login');
        return Observable.throw(error);
      });
  }
  putData(body : any, url: string) {
    const options = this.preparseOptions();
    return this.http.put(url, body, options)
      .catch((error:any) => {
        if (error.status === 401)
          this.router.navigateByUrl('/login');
        return Observable.throw(error);
      });;
  }

  preparseOptions() {
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    const options = new RequestOptions({ headers, withCredentials: true });
    return options;
  }
}
