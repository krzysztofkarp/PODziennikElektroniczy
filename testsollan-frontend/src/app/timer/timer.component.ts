import { TimerService } from './timer.service';
import { Http } from '@angular/http';
import { Component, OnInit, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})

@Injectable()
export class TimerComponent {
  time: string;
  // errorMessage: string;
  // timer: TimerComponent[];
  
  constructor(private timerService: TimerService) { }

  getTimer() {
     this.timerService.getTimer()
      .subscribe(
       time => this.time = time
      //   timer => this.timer = timer,
      //   error => this.errorMessage = error
     );
  }
  
}
