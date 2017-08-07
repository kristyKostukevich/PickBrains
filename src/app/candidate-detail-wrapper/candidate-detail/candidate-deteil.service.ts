import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class HttpService {

  constructor(private http: Http ,private route:ActivatedRoute) {
  }
  getData() {
    return this.http.get(`http://localhost:1337/api/candidates?id=${this.route.snapshot.url[2].path}`).toPromise();
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
  getOtherSkills(){
    return this.http.get('http://localhost:1337/api/meta-data/other-skills').toPromise();
  }
}
