import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class HrmGuard implements CanActivate{
  user: string;
  constructor() {
    const data = JSON.parse(localStorage.getItem('user'));
    this.user = data.type;
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<boolean> | boolean {
    return this.user === 'admin';
  }
}
