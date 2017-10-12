import { questionPath } from './../general/utils/constants';
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
              private holder: ResultholderService,
              private router: Router,
              private timerService: TimerService) { }

  points: any;
  percent: any;
  answers: any[];
  questionId;

  ngOnInit() {
  
    this.questionId = localStorage.getItem('currentQuestionId');

    if (sessionStorage.getItem('wasStarted') == 'yes') {
      this.router.navigate([questionPath, this.questionId]);
    }       
 
    this.points = this.holder.points;
    this.answers = this.holder.answers;
    this.percent = this.holder.points/40;
  }

 
      
        
        
    
  }


