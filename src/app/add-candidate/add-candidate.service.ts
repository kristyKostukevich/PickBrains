import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
import { PostCandidateInfo } from './add-candidate.component';

@Injectable()
export class HttpService {

  constructor(private http: Http) {
  }
  getCitiesData() {
    return this.http.get('http://192.168.43.8:1488/api/meta-data/locations').toPromise();
  }
  getStatusData() {
    return this.http.get('http://192.168.43.8:1488/api/meta-data/candidate-statuses').toPromise();
  }
  getSkillsData() {
    return this.http.get('http://192.168.43.8:1488/api/meta-data/skills').toPromise();
  }
  getLanguageData() {
    return this.http.get('http://192.168.43.8:1488/api/meta-data/english-levels').toPromise();
  }
  getOtherSkills(){
    return this.http.get('http://192.168.43.8:1488/api/meta-data/other-skills').toPromise();
  }

  postData(obj: PostCandidateInfo){
    const body = JSON.stringify(obj);
    console.log(body);
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    return this.http.post('http://192.168.43.8:1488/api/candidates/new', body, { headers: headers })
      .map((resp:Response)=>{ console.log( resp.status);})
      .catch((error:any) =>{return Observable.throw(error);});
  }
}
