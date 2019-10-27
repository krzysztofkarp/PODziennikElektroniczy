import { Consts } from '../utils/Consts';
import { Observable } from 'rxjs/Rx';
import { Http, Headers } from '@angular/core/http;
import { Injectable } from '@angular/core';
import { Response } from './response';
import { BackendMappings } from '../utils/backendMappings';

@Injectable()
export class BackendService {

  constructor(private http: Http) { }

  get(uri: string, params?: {}): Observable<Response> {
    return this.http
      .get(this.getUri(uri), this.createParamsObject(params))
      .map(resp => resp.json());
  }

  post(uri: string, body?: any, params?: {}): Observable<Response> {
    return this.http
      .post(this.getUri(uri), body, this.createParamsObject(params))
      .map(resp => resp.json());
  }

  private createParamsObject(params?: {}) {
    let headers = new Headers();


    return { params: params, headers: headers };
  }
  private getUri(uri: string) {
    return BackendMappings.INDEX+uri;
  }
}

