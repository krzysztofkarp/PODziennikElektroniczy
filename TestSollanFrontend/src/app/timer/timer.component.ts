import { Consts } from './../general/utils/Consts';
import { log } from 'util';
import { timeout } from 'rxjs/operator/timeout';
import { TimerService } from './timer.service';
import { Http } from '@angular/http';
import { Component, OnInit, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})

@Injectable()
export class TimerComponent implements OnInit {
  time: string;
  constructor(private timerService: TimerService,
    private router: Router) { }

  startTimer() {
    if (sessionStorage.getItem('wasStarted') === 'yes') {
      this.timerService.startTimer();
      Observable.interval(1000).takeWhile(() => true).subscribe(() => this.getTimer());
    } else {
      this.router.navigate([Consts.BackendMapping.RouterPaths.HOME]);
      sessionStorage.clear();
    }

  }
  getTimer() {
    this.timerService.getTimer()
      .subscribe(time => {
        this.time = time;
      });
  }

  ngOnInit() {
    this.startTimer();
  }
}

