import { Consts } from './../general/utils/Consts';
import { QuestionsService } from './../questions/questions.service';
import { TimerService } from './../timer/timer.service';
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

  points;
  name;
  answers;
  questionId;

  ngOnInit() {

    this.questionId = localStorage.getItem('currentQuestionId');
    if (sessionStorage.getItem('wasStarted') === 'yes') {
      this.router.navigate([Consts.BackendMapping.RouterPaths.QUESTION, this.questionId]);
    } else if (!sessionStorage.getItem('wasStarted')) {
      this.router.navigate([Consts.BackendMapping.RouterPaths.HOME]);
    }

    this.questionService.getResult()
    .subscribe(result => {
      this.points = result.points;
      this.answers = result.results;
      this.name = result.name;
    });
  }
}





