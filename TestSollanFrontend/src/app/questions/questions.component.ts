import { Consts } from './../general/utils/Consts';
import { QuestionsService } from './questions.service';
import { TimerComponent } from './../timer/timer.component';
import { TimerService } from './../timer/timer.service';
import { BackendService } from './../general/backend/backend.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSidenavModule } from '@angular/material';
import { Component, OnInit, DoCheck } from '@angular/core';

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
            this.router.navigate([Consts.BackendMapping.RouterPaths.RESULT]);
            this.timerService.stopTimer();
            sessionStorage.setItem('wasStarted', 'no');
          }); } else {
      alert('Nie zaznaczono żadnej odpowiedzi!');
    }


  }


}
