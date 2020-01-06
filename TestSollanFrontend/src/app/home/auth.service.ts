import { BackendMappings } from '../general/utils/backendMappings';
import { BackendService } from '../general/backend/backend.service';
import { Injectable } from '@angular/core';
import { RequestParams } from '../general/utils/requestParams';
import { Consts } from '../general/utils/Consts';

@Injectable()
export class AuthService {

  constructor(private backendService: BackendService) { }

  login(login: string, password: string){
    let params = {};
    params['login'] = login;
    params['password'] = password;
    return this.backendService.get(BackendMappings.Login.LOGIN, params);
  }

  logout(){
    let params = {};
    params[RequestParams.AUTH_TOKEN] = localStorage.getItem(Consts.StorageKey.AUTH_TOKEN);
    return this.backendService.get(BackendMappings.Login.LOGOUT, params);
  }

  isAuthenticated(){
    let params = {};
    params[RequestParams.AUTH_TOKEN] = localStorage.getItem(Consts.StorageKey.AUTH_TOKEN);
    return this.backendService.get(BackendMappings.Login.IS_AUTHENTICATED, params);
  }

}
