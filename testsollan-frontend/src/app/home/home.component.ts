import { TimerService } from './../timer/timer.service';
import { Observable } from 'rxjs/Rx';
import { HomeService } from './home.service';
import { Consts } from '../general/utils/Consts';
import { BackendService } from '../general/backend/backend.service';
import { homePath } from './../general/utils/constants';
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
  checker: boolean;
  constructor(
    private router: Router, 
    private homeService: HomeService,
    private timerService: TimerService
  ) {}

  ngOnInit() {
    localStorage.clear();
  }


  ngDoCheck(){
    if (sessionStorage.getItem('wasStarted') == 'yes') {
      this.homeService.getWasStarted()
        .subscribe(started => this.checker = started);
      if (this.checker) {
        this.router.navigate([questionPath, 1]);
      } else {
        this.router.navigate([homePath]);
        sessionStorage.clear();        
      }
    } else {
    }
  }

  start() {

    this.timerService.startTimer();
    this.router.navigate([questionPath, 1]);
    localStorage.setItem('currentQuestionId', '1');
    
    sessionStorage.setItem('wasStarted', 'yes');
  }



}
