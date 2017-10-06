import { TimerService } from '../timer/timer.service';
import { questionPath } from './../utils/constants';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private timerService: TimerService) { }

  ngOnInit() {
    localStorage.clear();
  }

  start() {
    this.timerService.startTimer();    
    this.router.navigate([questionPath, 1]);
    localStorage.setItem('currentQuestionId', '1');
  }
  
 
}