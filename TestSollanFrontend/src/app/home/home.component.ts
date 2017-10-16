import { TimerService } from './../timer/timer.service';
import { Observable } from 'rxjs/Rx';
import { Consts } from '../general/utils/Consts';
import { BackendService } from '../general/backend/backend.service';
import { homePath, questionPath } from './../general/utils/constants';
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
  emptyName: boolean;

  constructor(
    private router: Router,
    private timerService: TimerService
  ) {}

  ngOnInit() {
    localStorage.clear();
    console.log(name);
  }


  ngDoCheck() {
    if (sessionStorage.getItem('wasStarted')) {
      this.timerService.getWasStarted()
        .subscribe(started => {
          this.checker = started;
          console.log(started);
        });

        if (!this.checker) {
        this.router.navigate([questionPath, 1]);
      } else {
        this.router.navigate([homePath]);
        sessionStorage.clear();
      }
    }
  }

  start(name) {
    if (!name) {
      this.emptyName = true;
    } else {
      this.timerService.startTimer();
      this.router.navigate([questionPath, 1]);
      localStorage.setItem('currentQuestionId', '1');
      localStorage.setItem('name', name);
      sessionStorage.setItem('wasStarted', 'yes');
    }

  }
}
