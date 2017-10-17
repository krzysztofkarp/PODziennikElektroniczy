import { QuestionsService } from './../questions/questions.service';
import { questionPath, homePath } from './../general/utils/constants';
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
<<<<<<< HEAD:testsollan-frontend/src/app/result/result.component.ts

    private router: Router,
    private timerService: TimerService) { }
=======
              private router: Router,
              private timerService: TimerService,
              private questionService: QuestionsService) { }
>>>>>>> d85cc00af7c3602268435ab7458584d0884419be:TestSollanFrontend/src/app/result/result.component.ts

  points: any;
  name;
  answers;
  questionId;

  ngOnInit() {

    this.questionId = localStorage.getItem('currentQuestionId');
    if (sessionStorage.getItem('wasStarted') === 'yes') {
      this.router.navigate([questionPath, this.questionId]);
    } else if (!sessionStorage.getItem('wasStarted')) {
      this.router.navigate([homePath]);
    }

<<<<<<< HEAD:testsollan-frontend/src/app/result/result.component.ts
    this.points = localStorage.getItem('points');
    this.answers = JSON.parse(localStorage.getItem('final'));
    this.percent = this.points / 40;
  }
}
=======
    this.questionService.getResult()
    .subscribe(result => {
      this.points = result.points;
      this.answers = result.results;
      this.name = result.name;
    });
  }
}



>>>>>>> d85cc00af7c3602268435ab7458584d0884419be:TestSollanFrontend/src/app/result/result.component.ts


