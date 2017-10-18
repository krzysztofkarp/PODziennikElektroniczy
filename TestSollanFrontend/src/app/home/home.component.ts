import { TimerService } from './../timer/timer.service';
import { Observable } from 'rxjs/Rx';
import { Consts } from '../general/utils/Consts';
import { BackendService } from '../general/backend/backend.service';
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
  }


  ngDoCheck() {
    if (sessionStorage.getItem(Consts.Other.WAS_STARTED)) {
      this.timerService.getWasStarted()
        .subscribe(started => {
          this.checker = started;
          console.log(started);
        });

        if (!this.checker) {
        this.router.navigate([Consts.BackendMapping.RouterPaths.QUESTION, 1]);
      } else {
        this.router.navigate([Consts.BackendMapping.RouterPaths.HOME]);
        sessionStorage.clear();
      }
    }
  }

  start(name) {
    if (!name) {
      this.emptyName = true;
    } else {
      this.timerService.startTimer();
      this.router.navigate([Consts.BackendMapping.RouterPaths.QUESTION, 1]);
      localStorage.setItem(Consts.Other.CURRENT_QUESTION_ID, Consts.Other.ONE);
      localStorage.setItem(Consts.Other.NAME, name);
      sessionStorage.setItem(Consts.Other.WAS_STARTED, Consts.Other.YES);
    }

  }
}
