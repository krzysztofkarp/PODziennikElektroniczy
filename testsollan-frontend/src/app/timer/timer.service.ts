import { Consts } from '../general/utils/Consts';
import { BackendService } from '../general/backend/backend.service';
import { TimerComponent } from './../timer/timer.component';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable()

export class TimerService {


  constructor(private backendService: BackendService) {
  }

  getTimer() {
    return this.backendService.get(Consts.BackendMapping.Timer.GET_TIME).map(response => {
      if (response.ok) {
        console.log(response.item);
        return response.item;
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
