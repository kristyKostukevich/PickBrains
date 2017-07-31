import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';


@Injectable()
export class TechGuard implements CanActivate{
  user: string;
  constructor() {
    const data = JSON.parse(localStorage.getItem('user'));
    this.user = data.type;
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean> | boolean {
    console.log(this.user === 'admin' || this.user === 'HRM');
    return this.user === 'admin' || this.user === 'HRM';
  }

}
