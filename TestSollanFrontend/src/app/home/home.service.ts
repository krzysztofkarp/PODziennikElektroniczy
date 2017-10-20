import { Consts } from './../general/utils/Consts';
import { BackendService } from './../general/backend/backend.service';
import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {

  constructor(private backendService: BackendService) { }

  validatePassword(password){
    return this.backendService.get(Consts.BackendMapping.Checkers.VALIDATE_PASSWORD, {"password": password})
      .map(result => {
        console.log(result.item);
        return result.item;
      })
  }

}
