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
  getStatusData() {
    return this.http.get('http://localhost:1337/api/meta-data/candidate-statuses').toPromise();
  }
  getSkillsData() {
    return this.http.get('http://localhost:1337/api/meta-data/skills').toPromise();
  }
  getLanguageData() {
    return this.http.get('http://localhost:1337/api/meta-data/english-levels').toPromise();
  }
}
