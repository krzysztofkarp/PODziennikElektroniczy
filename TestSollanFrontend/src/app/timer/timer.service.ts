import { QuestionsService } from './../questions/questions.service';
import { resultPath } from './../general/utils/constants';
import { QuestionsComponent } from '../questions/questions.component';
import { QuestionComponent } from '../question/question.component';
import { Consts } from '../general/utils/Consts';
import { BackendService } from '../general/backend/backend.service';
import { TimerComponent } from './../timer/timer.component';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class TimerService {

  answers;
  result;

  constructor(private backendService: BackendService,
              private router: Router,
              private service: QuestionsService) {
  }

  startTimer() {
    return this.backendService.get(Consts.BackendMapping.Timer.START).subscribe(response => {
      if (response.ok) {
        console.log(response.item);
        return response.item;
      } else {
        return null;
      }
    });
  }

  stopTimer() {
    return this.backendService.get(Consts.BackendMapping.Timer.STOP).subscribe(response => {
      if (response.ok) {
        console.log(response.item);
        return response.item;
      } else {
        return null;
      }
    });
  }

  getTimer() {
    return this.backendService.get(Consts.BackendMapping.Timer.GET_TIME).map(response => {
      if (response.ok) {
        if (response.item !== "0:00") {
        return response.item;
        } else {
          if (this.answers = JSON.parse(localStorage.getItem('answers'))) {
            const name = localStorage.getItem('name');
          this.service.validateAnswers(this.answers, name)
            .subscribe(result => {
              this.result = result;
              this.router.navigate([resultPath]);
              this.stopTimer();
              sessionStorage.setItem('wasStarted', 'no');
            });
          }
        }
      }
    });
  }

  getWasStarted() {
    return this.backendService.get(Consts.BackendMapping.Checkers.GET_WAS_STARTED)
    .map(response => {
      if (response.ok) {
        return response.item;
      }else {
        return 0;
      }
    });
  }


}
