import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http-service';

@Injectable()
export class HrmGuard implements CanActivate{
  constructor(private http: HttpService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<boolean> | boolean {
    return (this.typeUser() === 'admin');

  }
  typeUser(): any {
    let user:string;

    this.http
      .getData(`http://localhost:1337/api/user`)
      .subscribe((data) => {
        console.log(data);
        return user = data.json().type;
      });
  }
}
