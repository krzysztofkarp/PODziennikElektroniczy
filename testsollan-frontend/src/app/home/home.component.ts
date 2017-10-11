import { TimerService } from './../timer/timer.service';
import { questionPath } from './../general/utils/constants';
import { TimerComponent } from './../timer/timer.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, 
              private timer: TimerComponent,
              private timerService: TimerService) { }

  ngOnInit() {
    let isRunning = this.timerService.getTimerStatus();
    localStorage.clear();
  }

  start() {
    this.timer.startTimer();
    this.router.navigate([questionPath, 1]);
    localStorage.setItem('currentQuestionId', '1');
  }
}
