import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QuestionsService {

  url = 'http://jsonplaceholder.typicode.com/posts';
  aurl = 'http://jsonplaceholder.typicode.com/users';

  constructor(private http: Http) {


   }

   getQuestions() {
   return this.http.get(this.url)
        .map(response => response.json());
   }

   getAnswers() {
    return this.http.get(this.aurl)
         .map(response => response.json());
    }

  getImages () {
    let images = [];
    for ( let x = 1; x <= 40; x++) {
      images.push('img/q' + x + '.jpg');
    }
    return images;

  }

}
