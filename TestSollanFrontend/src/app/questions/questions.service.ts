import { Consts } from './../general/utils/Consts';
import { BackendService } from './../general/backend/backend.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QuestionsService {

 images;

  constructor(private backendService: BackendService) {}

   getAnswers(questionId) {
    return this.backendService.get(Consts.BackendMapping.Answers.GET_ANSWERS, questionId)
      .map(response => {
        if (response.ok) {
          return response.items;
      } else {
          return 0;
      }
    });
  }

  validateAnswers(answers, name) {
    return this.backendService.post(Consts.BackendMapping.Answers.CHECK_ANSWERS, answers, {'name': name})
      .map(response => {
        if (response.ok) {
          console.log(response.item);
          return response.item;
      } else {
          return 0;
      }
    });
  }

  getResult() {
    return this.backendService.get(Consts.BackendMapping.Answers.GET_RESULT)
      .map(response => {
        if (response.ok) {
          console.log(response.item);
          return response.item;
        } else {
          return 0;
        }
      });
  }

  getImages () {
    this.images = [];
    for ( let x = 1; x <= 40; x++) {
      this.images.push(Consts.Other.IMG + x + Consts.Other.JPG);
    }
    return this.images;

  }

}
