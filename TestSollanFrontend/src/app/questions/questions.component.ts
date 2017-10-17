import { QuestionsService } from './questions.service';
import { TimerComponent } from './../timer/timer.component';
import { TimerService } from './../timer/timer.service';
import { resultPath, questionPath } from './../general/utils/constants';
import { BackendService } from './../general/backend/backend.service';
import { ActivatedRoute, Router } from '@angular/router';
<<<<<<< HEAD:testsollan-frontend/src/app/questions/questions.component.ts
import { MatSidenavModule } from '@angular/material';
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit, DoCheck, ViewEncapsulation } from '@angular/core';
>>>>>>> d85cc00af7c3602268435ab7458584d0884419be:TestSollanFrontend/src/app/questions/questions.component.ts

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})

export class QuestionsComponent implements OnInit, DoCheck {


  constructor(private route: ActivatedRoute,
              private router: Router,
              private timerService: TimerService,
              private questionsService: QuestionsService) { }

  private questionId;
  private answers;
  private result: any = {};

  ngOnInit() {}

  ngDoCheck() {
    this.questionId = localStorage.getItem('currentQuestionId');
  }

  finish() {
    if (this.answers = JSON.parse(localStorage.getItem('answers'))) {
        const name = localStorage.getItem('name');
        this.questionsService.validateAnswers(this.answers, name)
          .subscribe(result => {
            this.result = result;
            this.router.navigate([resultPath]);
            this.timerService.stopTimer();
            sessionStorage.setItem('wasStarted', 'no');
          }); } else {
      alert('Nie zaznaczono żadnej odpowiedzi!');
    }


  }


}
