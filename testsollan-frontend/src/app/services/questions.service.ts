import { Consts } from './../general/utils/Consts';
import { BackendService } from './../general/backend/backend.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QuestionsService {

  url = 'http://jsonplaceholder.typicode.com/posts';


  constructor(private backendService: BackendService) {


   }

  //  getQuestions() {
  //  return this.http.get(this.url)
  //       .map(response => response.json());
  //  }

   getAnswers(questionId) {
    return this.backendService.get(Consts.BackendMapping.Answers.GET_ANSWERS, questionId).map(response => {
      if (response.ok) {
        console.log(response.items);
        return response.items;
      } else {
        return 0;
      }

    });
  }

  getImages () {
    let images = [];
    for ( let x = 1; x <= 40; x++) {
      images.push('img/q' + x + '.jpg');
    }
    return images;

  }

}
