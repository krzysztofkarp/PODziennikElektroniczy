import { Consts } from './../general/utils/Consts';
import { BackendService } from './../general/backend/backend.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QuestionsService {

 
  constructor(private backendService: BackendService) {


   }

   getAnswers(questionId) {
    return this.backendService.get(Consts.BackendMapping.Answers.GET_ANSWERS, questionId).map(response => {
      if (response.ok) {
        return response.items;
      } else {
        return 0;
      }

    });
  }

  getResult(answers) {
    return this.backendService.post(Consts.BackendMapping.Answers.CHECK_ANSWERS, answers).map(response => {
      if (response.ok) {
        return response.item;
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
