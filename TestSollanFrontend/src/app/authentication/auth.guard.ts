import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { NotificationService } from '../notification/notification.service';
import { Consts } from '../general/utils/Consts';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private nService: NotificationService) {}
 
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let id = localStorage.getItem(Consts.StorageKey.USER);
       if (id){
         return true
       } else  {
         this.nService.showWarning(Consts.Messages.NOT_LOGGED_IN)
         this.router.navigate( [Consts.RouterPaths.LOGIN] );
         return false
 
       }
 
  }
}
