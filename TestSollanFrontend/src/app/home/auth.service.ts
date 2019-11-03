import { BackendMappings } from '../general/utils/backendMappings';
import { BackendService } from '../general/backend/backend.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor(private backendService: BackendService) { }

  login(login: string, password: string){
    let params = {};
    params['login'] = login;
    params['password'] = password;
    return this.backendService.get(BackendMappings.Login.LOGIN, params);
  }

}
