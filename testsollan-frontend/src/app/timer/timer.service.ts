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
import { QuestionsService } from './../services/questions.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class TimerService {
  
  constructor(private backendService: BackendService, private router: Router) {
  }
  
  startTimer() {
    return this.backendService.get(Consts.BackendMapping.Timer.START).subscribe(response => {
      if(response.ok){
        console.log(response.item);
        return response.item;
      }else{
        return null;
      }
    });
  }

  stopTimer() {
    return this.backendService.get(Consts.BackendMapping.Timer.STOP).subscribe(response => {
      if(response.ok){
        console.log(response.item);
        return response.item;
      }else{
        return null;
      }
    });
  }
  
  getTimer() {
    return this.backendService.get(Consts.BackendMapping.Timer.GET_TIME).map(response => {
      if (response.ok) {
        if(response.item !== "0:00"){
        return response.item;
        }else{
          this.stopTimer();
          this.router.navigate([resultPath]);
        }
      } else {
        return 0;
      }
    });
  }

  
  
  

  // private parseData(res: Response) {
  //   return res.json() || [];
  // }

  // private handleError(error: Response | any) {
  //   let errorMessage: string;

  //   errorMessage = error.message ? error.message : error.toString();
  //   return Observable.throw(errorMessage);
  // }
}
