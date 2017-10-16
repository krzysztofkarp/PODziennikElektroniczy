import { QuestionsService } from './questions.service';
import { TimerComponent } from './../timer/timer.component';
import { TimerService } from './../timer/timer.service';
import { resultPath, questionPath } from './../general/utils/constants';
import { ResultholderService } from './../result/resultholder.service';
import { BackendService } from './../general/backend/backend.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSidenavModule } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})

export class QuestionsComponent implements OnInit {

 
  constructor(private route: ActivatedRoute, 
              private router: Router,
              private timerService: TimerService,
              private questionsService: QuestionsService,
              private holder: ResultholderService) { }

  private questionId;
  private answers;
  private result: any = {};

  ngOnInit() {}

  ngDoCheck() {
    this.questionId = localStorage.getItem('currentQuestionId');
  }

  finish() {
    if(this.answers = JSON.parse(localStorage.getItem('answers')))
        this.questionsService.getResult(this.answers)
          .subscribe(result => {
            this.result = result;
            this.holder.holdResult(this.result);
            this.router.navigate([resultPath]);
            this.timerService.stopTimer();
            sessionStorage.setItem('wasStarted', 'no');        
          });
    else alert('Nie zaznaczono żadnej odpowiedzi!');
    
    
  }


}
