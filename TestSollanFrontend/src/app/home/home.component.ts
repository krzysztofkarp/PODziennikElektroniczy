import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeService } from './home.service';
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
  form: FormGroup;
  invalidPassword: boolean;
  currentQuestionId;

  constructor(
    private router: Router,
    private timerService: TimerService,
    private homeService: HomeService,
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      password: ['', Validators.required],
      name: ['', Validators.required]
    })
  }



  ngOnInit() {
    this.currentQuestionId = localStorage.getItem(Consts.Other.CURRENT_QUESTION_ID);
  }


  ngDoCheck() {
    if (sessionStorage.getItem(Consts.Other.WAS_STARTED)) {
      this.timerService.getWasStarted()
        .subscribe(started => {
          if(started) {
            this.router.navigate([Consts.BackendMapping.RouterPaths.QUESTION, this.currentQuestionId]);
          } else {
            this.router.navigate([Consts.BackendMapping.RouterPaths.HOME]);
            sessionStorage.clear();
          }
        });
    }
  }

  start(fg) {
    this.homeService.validatePassword(fg.password)
      .subscribe(response => {
        if(response){
          this.timerService.startTimer();
          this.router.navigate([Consts.BackendMapping.RouterPaths.QUESTION, 1]);
          localStorage.setItem(Consts.Other.CURRENT_QUESTION_ID, Consts.Other.ONE);
          localStorage.setItem(Consts.Other.NAME, fg.name);
          sessionStorage.setItem(Consts.Other.WAS_STARTED, Consts.Other.YES);
        } else {
          this.invalidPassword = true;
        }
        
      });
  }

  get password(){ return this.form.get('password');}
  get name(){ return this.form.get('name');}
}
