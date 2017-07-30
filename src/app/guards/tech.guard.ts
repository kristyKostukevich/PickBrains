import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http-service';

@Injectable()
export class TechGuard implements CanActivate{
  constructor(private http: HttpService) {}

  typeUser(): string {
    this.http
      .getData(`http://localhost:1337/api/user`)
      .subscribe((data) => {
        console.log(data.json().type);
        return data.json().type;
      });

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<boolean> | boolean {
    this.http
      .getData(`http://localhost:1337/api/user`)
      .subscribe((data) => {
        console.log(data.json().type);
        console.log(data.json().type === 'admin');
        return data.json().type === 'admin';
      });
    //console.log((this.typeUser() === 'HRM'));
    //return (this.typeUser() === 'admin' || this.typeUser() === 'HRM');
  }

}
