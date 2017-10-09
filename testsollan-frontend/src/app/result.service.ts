import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ResultService {

  url = 'http://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http) { }

  send(data) {
    return this.http.post(this.url, JSON.stringify(data))
    .map(response => {
      response.json()
      console.log(response);
      console.log(data);
      
    });
  }

}
