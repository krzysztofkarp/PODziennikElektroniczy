import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { NotificationService } from '../notification/notification.service';
import { Consts } from '../general/utils/Consts';
import { AuthService } from '../home/auth.service';
import { GuardUtil } from '../general/utils/guardUtil';
import { Response } from '../general/backend/response';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private nService: NotificationService, private auth: AuthService) {}
 
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let id = localStorage.getItem(Consts.StorageKey.AUTH_TOKEN);
       if (id){
          return new Observable(observer => {
          this.auth.isAuthenticated()
            .subscribe(response => {
              if (response.item == true) {
                observer.next(true);
              } else {
                localStorage.removeItem(Consts.StorageKey.AUTH_TOKEN);
               setTimeout(() => {
                this.router.navigate([Consts.RouterPaths.LOGIN]);
               }, 2000);
                return false;
           
            }
          });
        });
       } else  {
         this.nService.showWarning(Consts.Messages.NOT_LOGGED_IN)
         this.router.navigate([Consts.RouterPaths.LOGIN]);
         return false;
 
       }


     
  
    


 
  }
}
