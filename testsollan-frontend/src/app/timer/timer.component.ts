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
<<<<<<< HEAD
  // errorMessage: string;
  // timer: TimerComponent[];
=======
  timerLoaded: boolean = false;
>>>>>>> 10493771e30db38d3ff1dfab20ee50ddead4ff12

  constructor(private timerService: TimerService) { }

  startTimer() {
    this.timerService.startTimer();
    Observable.interval(1000).takeWhile(() => true).subscribe(() => this.getTimer());

  }
  getTimer() {
    this.timerService.getTimer()
      .subscribe(time => this.time = time)
  }
  
  public ngOnInit(): void {
   this.startTimer();
  }
}

