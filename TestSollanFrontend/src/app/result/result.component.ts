import { QuestionsService } from './../questions/questions.service';
import { questionPath, homePath } from './../general/utils/constants';
import { TimerService } from './../timer/timer.service';
import { ResultholderService } from './resultholder.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private route: ActivatedRoute,

              private router: Router,
              private timerService: TimerService,
              private questionService: QuestionsService) { }

  points: any;
  percent: any;
  answers;
  questionId;

  ngOnInit() {

    this.questionId = localStorage.getItem('currentQuestionId');
    if (sessionStorage.getItem('wasStarted') === 'yes') {
      this.router.navigate([questionPath, this.questionId]);
    } else if (!sessionStorage.getItem('wasStarted')) {
      this.router.navigate([homePath]);
    }

    this.questionService.getResult()
    .subscribe(result => {
      this.points = result.points;
      this.answers = result.results;
    });
  }








  }





