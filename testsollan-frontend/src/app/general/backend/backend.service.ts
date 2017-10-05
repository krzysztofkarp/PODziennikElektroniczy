import { Consts } from '../../home/utils/Consts';
import { Observable } from 'rxjs/Rx';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Response } from './response';

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
    // headers.append(Consts.Headers.Key.ACCEPT, Consts.Header.Value.APPLICATION_JSON);
    // headers.append(Consts.Header.Key.CONTENT_TYPE, Consts.Header.Value.APPLICATION_JSON);
    // headers.append(Consts.Header.Key.TOKEN, this.storageService.getItem(Consts.Storage.Key.TOKEN));

    return { params: params, headers: headers };
  }
  private getUri(uri: string) {
    return uri;
  }
}

