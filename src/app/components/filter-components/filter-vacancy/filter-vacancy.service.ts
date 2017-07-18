import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {

  constructor(private http: Http) {
  }

  getCitiesData() {
    return this.http.get('http://localhost:1337/api/meta-data/locations').toPromise();
  }

  getSkillsData() {
    return this.http.get('http://localhost:1337/api/meta-data/skills').toPromise();
  }
}

