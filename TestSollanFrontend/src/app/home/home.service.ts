import { Router } from '@angular/router';
import { BackendService } from '../general/backend/backend.service';
import { Injectable } from '@angular/core';
import { Consts } from '../general/utils/Consts';

@Injectable()
export class HomeService {
  constructor(private backendService: BackendService, private router: Router) {}


   getWasStarted(){
    return this.backendService.get(Consts.BackendMapping.Checkers.GET_WAS_STARTED)
    .map(response => {
      if(response.ok){
        console.log(response.item);
        return response.item;
      }else{
        return 0;
      }
    });
  }
  
}
