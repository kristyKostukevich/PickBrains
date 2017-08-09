import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { UserService } from '../core-service/user.service';


@Injectable()
export class TechGuard implements CanActivate{

  constructor(private userService: UserService,
              private router: Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<boolean> | boolean {
    this.userService.type.subscribe(data => {
      if (data === 'TECH')
        this.router.navigateByUrl('/inerviews');
    });
    return this.userService.type.map(data => ['admin', 'HRM'].indexOf(data) !== -1);
  }

}
