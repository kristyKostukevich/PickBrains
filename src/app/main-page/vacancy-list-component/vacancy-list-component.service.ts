import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {

  constructor(private http: Http) {
  }

  getData(body: any) {
    return this.http.post('http://localhost:1337/api/vacancies', body).toPromise();
  }
}
