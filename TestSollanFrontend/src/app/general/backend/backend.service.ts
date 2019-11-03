import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Response } from './response';
import { BackendMappings } from '../utils/backendMappings';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class BackendService {

  constructor(private http: HttpClient) { }


  get(uri: string, params?: {}): Observable<Response<any>> {
    return this.getForResponse(uri, params);
  }

  post(uri: string, body?: any, params?: {}): Observable<Response<any>> {
    return this.postForResponse(uri, body, params);
  }

  put(uri: string, body?: any, params?: {}): Observable<Response<any>> {
    return this.putForResponse(uri, body, params).map(resp => resp.json());
  }
  
  putForResponse(uri: string, body?: any, params?: {}): Observable<any> {
    return this.http.put(this.getUri(uri), body, this.createParamsObject(params));
  }

  getForResponse(uri: string, params?: {}): Observable<any> {
    return this.http.get(this.getUri(uri), this.createParamsObject(params));
  }

  postForResponse(uri: string, body?: any, params?: {}): Observable<any> {
    return this.http.post(this.getUri(uri), body, this.createParamsObject(params));
  }

  private createParamsObject(params?: any) {
    let headers = new HttpHeaders();
    return { headers: headers, params: params};
  }
  private getUri(uri: string) {
    return BackendMappings.INDEX+uri;
  }
}

